import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Warning {
  file: string;
  heading: string;
  reason: string;
}

interface ReferenceCode {
  lang: string;
  code: string;
  verified: boolean;
}

interface CodingQuestion {
  id: string;
  title: string;
  sourceFile: string;
  status: 'verified_pyq' | 'practice' | 'unclassified';
  difficulty: 'easy' | 'medium' | 'hard' | 'unclassified';
  topics: string[];
  problem: string;
  constraints: string | null;
  sampleInput: string | null;
  sampleOutput: string | null;
  explanation: string | null;
  hint: string | null;
  note: string | null;
  referenceCode: ReferenceCode[] | null;
  ambiguousFormat: boolean;
}

interface MCQItem {
  id: string;
  paper: string;
  section: string;
  questionNumber: number;
  question: string;
  options: string[] | null;
  answer: { status: 'verified' | 'missing' | 'author_flagged_incorrect_options'; raw: string | null };
  authorNote: string | null;
}

interface Paper {
  id: string;
  title: string;
  sourceFile: string;
  sections: string[];
  questionCount: number;
}

interface TopicNote {
  id: string;
  title: string;
  category: string;
  sourceFile: string;
  body: string;
}

// Global state
const warnings: Warning[] = [];
const seenIds = new Set<string>();
let idMap: Record<string, string> = {};
const summary = {
  codingQuestions: 0,
  mcqs: 0,
  papers: 0,
  topicNotes: 0,
  warnings: 0,
  crossRefMatches: 0
};

// Utils
function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').trim();
}

function shortHash(text: string): string {
  return crypto.createHash('sha256').update(text).digest('hex').substring(0, 8);
}

function generateId(title: string, sourceFile: string, rawHeading: string): string {
  return slugify(title).substring(0, 60) + '-' + shortHash(sourceFile + rawHeading);
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function yamlStr(s: string, indent: string): string {
  if (s.includes('\n')) {
    const prefix = indent + '  ';
    return '|\n' + s.split('\n').map(l => prefix + l).join('\n');
  }
  // Quote if contains YAML special chars, looks numeric, starts/ends with space, or is a reserved word
  if (
    /[\x00-\x08\x0b-\x1f:#{}[\]|>&*!,?'"@`\\<%]/.test(s) ||
    s.startsWith(' ') || s.endsWith(' ') || s === '' || s.startsWith('-') ||
    /^-?[\d.]+(%|e[+-]?\d+)?$/i.test(s) ||   // numbers, negatives, percentages
    ['true','false','null','~','yes','no','on','off'].includes(s.toLowerCase())
  ) {
    return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }
  return s;
}

function yamlValue(val: any, indent = ''): string {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'boolean') return val ? 'true' : 'false';
  if (typeof val === 'number') return val.toString();
  if (typeof val === 'string') return yamlStr(val, indent);
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    if (typeof val[0] !== 'object' || val[0] === null) {
      // block array of scalars
      let out = '';
      for (const item of val) {
        out += '\n' + indent + '- ' + yamlValue(item, indent + '  ');
      }
      return out;
    }
    // block sequence of objects
    const childIndent = indent + '  ';
    let out = '';
    for (const item of val) {
      const keys = Object.keys(item);
      out += '\n' + indent + '- ';
      keys.forEach((k, i) => {
        const vStr = yamlValue(item[k], childIndent + '  ');
        if (i === 0) {
          out += `${k}: ${vStr}`;
        } else {
          out += '\n' + childIndent + `${k}: ${vStr}`;
        }
      });
    }
    return out;
  }
  if (typeof val === 'object') {
    // block mapping — emit each key indented
    const childIndent = indent + '  ';
    let out = '';
    for (const k of Object.keys(val)) {
      out += '\n' + indent + `${k}: ${yamlValue(val[k], childIndent)}`;
    }
    return out;
  }
  return 'null';
}

function writeFrontmatter(obj: any): string {
  let out = '---\n';
  for (const k of Object.keys(obj)) {
    const v = yamlValue(obj[k], '  ');
    out += `${k}: ${v}\n`;
  }
  out += '---\n';
  return out;
}

const TOPIC_KEYWORDS: Record<string, string[]> = {
  'arrays': ['array', 'subarray', 'rotate', 'element', 'duplicate', 'missing number', 'frequency', 'second largest', 'move zero', 'chocolate'],
  'strings': ['string', 'palindrome', 'anagram', 'vowel', 'consonant', 'reverse word', 'substring', 'character', 'caesar cipher', 'password'],
  'math': ['gcd', 'lcm', 'prime', 'armstrong', 'fibonacci', 'digit sum', 'leap year', 'binary', 'perfect number', 'handshake', 'derangement', 'average', 'speed', 'production'],
  'dp': ['subset sum', 'coin change', 'lcs', 'longest common', 'knapsack', 'jump game', 'word break', 'unique paths'],
  'bit-manipulation': ['xor', 'toggle bit', 'flip', 'bitwise'],
  'linked-list': ['linked list', 'cycle detection'],
  'graph': ['bfs', 'breadth first'],
  'matrix': ['matrix', 'pascal', 'diagonal', 'rotate image'],
  'two-pointer': ['two sum', 'dutch national flag', '0s, 1s'],
  'sliding-window': ['longest substring', 'without repeating'],
  'pattern-printing': ['pattern', 'triangle'],
  'hashing': ['frequency', 'first non-repeating', 'occurrence'],
  'sorting': ['bubble sort', 'sorting'],
  'searching': ['binary search', 'odd occurring'],
  'series': ['series', 'nth term', 'number pattern', 'ap/gp'],
};

function inferTopics(text: string): string[] {
  const topics = new Set<string>();
  const lower = text.toLowerCase();
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        topics.add(topic);
      }
    }
  }
  return Array.from(topics);
}

function addWarning(file: string, heading: string, reason: string) {
  warnings.push({ file, heading, reason });
  summary.warnings++;
}

// File paths
const ROOT = path.resolve(__dirname, '..');
const LEGACY_DIR = path.join(ROOT, 'legacy');
const OUT_DIR = path.join(ROOT, 'src', 'content');
const DATA_DIR = path.join(ROOT, 'data');

const CODING_DIR = path.join(OUT_DIR, 'coding-questions');
const MCQ_DIR = path.join(OUT_DIR, 'mcq-items');
const PAPERS_DIR = path.join(OUT_DIR, 'papers');
const TOPICS_DIR = path.join(OUT_DIR, 'topic-notes');

function setupDirs() {
  const dirs = [CODING_DIR, MCQ_DIR, PAPERS_DIR, TOPICS_DIR, DATA_DIR];
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
    ensureDir(dir);
  }
}

// Parser 1: questions.md
const codingQuestionsList: CodingQuestion[] = [];

function parseQuestionsMd() {
  const file = 'questions.md';
  const filePath = path.join(LEGACY_DIR, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');

  const blocks = content.split(/^## Q\d+\./m);
  const headers = [...content.matchAll(/^## Q(\d+)\.(.*?)$/gm)];

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const match = headers[i - 1];
    if (!match) continue;
    const oldId = match[1];
    let titleLine = match[2].trim();
    
    let status: CodingQuestion['status'] = 'unclassified';
    let difficulty: CodingQuestion['difficulty'] = 'unclassified';
    
    if (titleLine.includes('■ VERIFIED PYQ')) {
      status = 'verified_pyq';
      titleLine = titleLine.replace('■ VERIFIED PYQ', '').trim();
    } else if (titleLine.includes('■ PRACTICE (Pattern-Based)')) {
      status = 'practice';
      titleLine = titleLine.replace('■ PRACTICE (Pattern-Based)', '').trim();
    }

    if (titleLine.includes('[Easy]')) {
      difficulty = 'easy';
      titleLine = titleLine.replace('[Easy]', '').trim();
    } else if (titleLine.includes('[Medium]')) {
      difficulty = 'medium';
      titleLine = titleLine.replace('[Medium]', '').trim();
    } else if (titleLine.includes('[Hard]')) {
      difficulty = 'hard';
      titleLine = titleLine.replace('[Hard]', '').trim();
    }

    const title = titleLine;
    const rawHeading = `## Q${oldId}. ` + match[2];
    const id = generateId(title, file, rawHeading);
    idMap[`Q${oldId}`] = id;

    // extract fields
    const extractSection = (marker: string, nextMarkers: string[]): string | null => {
      const idx = block.indexOf(`**${marker}**`);
      if (idx === -1) return null;
      let endIdx = block.length;
      for (const next of nextMarkers) {
        const nidx = block.indexOf(`**${next}**`, idx + 1);
        if (nidx !== -1 && nidx < endIdx) endIdx = nidx;
      }
      let content = block.substring(idx + `**${marker}**`.length, endIdx).trim();
      // remove leading colon if present
      if (content.startsWith(':')) content = content.substring(1).trim();
      return content || null;
    };

    const markers = ['Problem', 'Constraints', 'Sample Input', 'Sample Output', 'Explanation', 'Hint', 'Note'];
    let problem = extractSection('Problem', markers) || title;
    const constraints = extractSection('Constraints', markers);
    let sampleInput = extractSection('Sample Input', markers);
    let sampleOutput = extractSection('Sample Output', markers);
    const explanation = extractSection('Explanation', markers);
    const hint = extractSection('Hint', markers);
    const note = extractSection('Note', markers);

    // Clean up sample input/output code fences
    const cleanFence = (text: string | null) => {
      if (!text) return null;
      const m = text.match(/```\w*\n([\s\S]*?)```/);
      if (m) return m[1].trim();
      return text.trim();
    };

    sampleInput = cleanFence(sampleInput);
    sampleOutput = cleanFence(sampleOutput);

    const ambiguousFormat = !!(sampleInput && sampleInput.includes(','));

    // code blocks
    const refCodes: ReferenceCode[] = [];
    const codeMatch = block.matchAll(/```(\w+)\n([\s\S]*?)```/g);
    for (const cm of codeMatch) {
      const lang = cm[1];
      if (lang !== 'text') {
        refCodes.push({ lang, code: cm[2].trim(), verified: true });
      }
    }

    const topics = inferTopics(problem + ' ' + title);

    const q: CodingQuestion = {
      id,
      title,
      sourceFile: file,
      status,
      difficulty,
      topics,
      problem,
      constraints,
      sampleInput,
      sampleOutput,
      explanation,
      hint,
      note,
      referenceCode: refCodes.length > 0 ? refCodes : null,
      ambiguousFormat
    };
    
    codingQuestionsList.push(q);
  }
}

// Parser 2: coding-questions-50.md
function parseCoding50() {
  const file = 'materials/coding-questions-50.md';
  const filePath = path.join(LEGACY_DIR, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');

  const blocks = content.split(/^## \d+\./m);
  const headers = [...content.matchAll(/^## (\d+)\.(.*?)$/gm)];

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const match = headers[i - 1];
    if (!match) continue;
    const title = match[2].trim();
    const oldId = match[1];

    const codeMatch = block.match(/```(\w+)\n([\s\S]*?)```/);
    let code = null;
    let lang = 'java';
    if (codeMatch) {
      lang = codeMatch[1] || 'java';
      code = codeMatch[2].trim();
    }

    // try to match existing
    const normTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    let matched = false;
    for (const cq of codingQuestionsList) {
      const cqNorm = cq.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (cqNorm === normTitle || cqNorm.includes(normTitle) || normTitle.includes(cqNorm)) {
        matched = true;
        summary.crossRefMatches++;
        if (code) {
          if (!cq.referenceCode) cq.referenceCode = [];
          cq.referenceCode.push({ lang, code, verified: false });
        }
        break;
      }
    }

    if (!matched) {
      const id = generateId(title, file, `## ${oldId}. ${title}`);
      const q: CodingQuestion = {
        id,
        title,
        sourceFile: file,
        status: 'unclassified',
        difficulty: 'unclassified',
        topics: inferTopics(title),
        problem: title,
        constraints: null,
        sampleInput: null,
        sampleOutput: null,
        explanation: null,
        hint: null,
        note: null,
        referenceCode: code ? [{ lang, code, verified: false }] : null,
        ambiguousFormat: false
      };
      codingQuestionsList.push(q);
    }
  }
}

// Parser 3: hr-questions.md
function parseHrQuestions() {
  const file = 'materials/hr-questions.md';
  const filePath = path.join(LEGACY_DIR, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');

  const blocks = content.split(/^## \d+\./m);
  const headers = [...content.matchAll(/^## (\d+)\.(.*?)$/gm)];

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const match = headers[i - 1];
    if (!match) continue;
    const title = match[2].trim();
    const body = block.trim();
    if (body.length < 200) {
      addWarning(file, title, `Thin content: ${body.length} characters`);
    }
    const id = generateId(title, file, `## ${match[1]}. ${title}`);
    
    const note: TopicNote = {
      id,
      title,
      category: 'hr-interview',
      sourceFile: file,
      body
    };
    
    const outPath = path.join(TOPICS_DIR, `${id}.md`);
    const fm = writeFrontmatter({
      id: note.id,
      title: note.title,
      category: note.category,
      sourceFile: note.sourceFile
    });
    fs.writeFileSync(outPath, fm + '\n' + note.body);
    summary.topicNotes++;
  }
}

// Parser 4: dsa-patterns.md
function parseDsaPatterns() {
  const file = 'materials/dsa-patterns.md';
  const filePath = path.join(LEGACY_DIR, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');

  const lines = content.split('\n');
  let currentPattern = '';
  let patternContent = '';
  
  let currentSubProb = '';
  let subProbContent = '';
  
  const processSubProb = (title: string, body: string, pattern: string) => {
    if (!title) return;
    const id = generateId(title, file, `${pattern} - ${title}`);
    const note: TopicNote = {
      id,
      title: `${pattern}: ${title}`,
      category: 'dsa-patterns',
      sourceFile: file,
      body: body.trim()
    };
    if (body.includes('```') && body.split('```').length % 2 === 0) {
      addWarning(file, title, 'Broken code block (unmatched triple backticks)');
    }
    const outPath = path.join(TOPICS_DIR, `${id}.md`);
    const fm = writeFrontmatter({
      id: note.id,
      title: note.title,
      category: note.category,
      sourceFile: note.sourceFile
    });
    fs.writeFileSync(outPath, fm + '\n' + note.body);
    summary.topicNotes++;
  };

  let numPattern = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## Pattern')) {
      if (currentSubProb) processSubProb(currentSubProb, subProbContent, currentPattern);
      currentPattern = line.substring(3).trim();
      currentSubProb = '';
      subProbContent = '';
      numPattern++;
    } else if (line.startsWith('### ') && !line.startsWith('### Java') && !line.startsWith('### C++') && !line.startsWith('### Python')) {
      // detect restart for missing pattern 3
      if (line.match(/^### 1\./) && currentSubProb !== '') {
        // missing pattern header
        if (currentSubProb) processSubProb(currentSubProb, subProbContent, currentPattern);
        currentPattern = `Pattern ${numPattern + 1} (Inferred)`;
        numPattern++;
      }
      
      if (currentSubProb) processSubProb(currentSubProb, subProbContent, currentPattern);
      currentSubProb = line.substring(4).trim();
      subProbContent = '';
    } else {
      if (currentSubProb) {
        subProbContent += line + '\n';
      }
    }
  }
  if (currentSubProb) processSubProb(currentSubProb, subProbContent, currentPattern);
}

// Section name normalization for paper parsing
const SECTION_PATTERNS = [
  { re: /Numerical\s*Ability/i, name: 'Numerical Ability' },
  { re: /Verbal\s*Ability/i, name: 'Verbal Ability' },
  { re: /Reasoning\s*Ability/i, name: 'Reasoning Ability' },
  { re: /Advanced\s*Coding/i, name: 'Advanced Coding' },
  { re: /Programming\s*Logic/i, name: 'Programming Logic' },
  { re: /^## Coding$/im, name: 'Coding' },
];

function detectSection(line: string): string | null {
  for (const { re, name } of SECTION_PATTERNS) {
    if (re.test(line)) return name;
  }
  return null;
}

// Parser 5: MCQ papers
function parseMcqPapers() {
  const parsePaper = (file: string, isSolved2024: boolean = false) => {
    const filePath = path.join(LEGACY_DIR, file);
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf-8');

    const titleMatch = content.match(/^# (.*?)$/m);
    const paperTitle = titleMatch ? titleMatch[1].trim() : file;
    const paperId = slugify(file.replace('.md', '').split('/').pop() || '');

    const sections: string[] = [];
    let qCount = 0;

    let currentSection = '';
    let currentQ = '';
    let currentQnum = 0;
    let qBody = '';

    const processQ = () => {
      if (!currentQ) return;
      if (qBody.includes('_No extractable text on this page._')) {
        qBody = qBody.replace(/_No extractable text on this page._/g, '');
      }

      // Check if it's coding section in 2024 paper
      if (isSolved2024 && (currentSection.toLowerCase().includes('programming') || currentSection.toLowerCase().includes('coding'))) {
        const qBodyClean = qBody.replace(/\s+/g, '').trim();
        if (qBodyClean.length < 10) {
          addWarning(file, currentQ, `Skipped empty/thin coding question: <10 chars (${qBodyClean.length})`);
          return;
        }
        // parse as coding question
        const rawHeadingForId = `${currentSection} - ${currentQ} - index ${qCount}`;
        const id = generateId(currentQ, file, rawHeadingForId);
        const q: CodingQuestion = {
          id,
          title: currentQ,
          sourceFile: file,
          status: 'verified_pyq',
          difficulty: 'unclassified',
          topics: inferTopics(qBody),
          problem: qBody.trim(),
          constraints: null,
          sampleInput: null,
          sampleOutput: null,
          explanation: null,
          hint: null,
          note: null,
          referenceCode: null,
          ambiguousFormat: false
        };
        codingQuestionsList.push(q);
        qCount++;
        return;
      }

      // parse MCQ with robust trailing option block extraction
      let body = qBody;
      if (body.includes('_No extractable text on this page._')) {
        body = body.replace(/_No extractable text on this page._/g, '');
      }

      let rawAns: string | null = null;
      let ansStatus: MCQItem['answer']['status'] = 'missing';

      // Find Answer or Solution marker
      const ansMatch = body.match(/\*\*(?:Answer|Solution):\*\*\s*(.*)/i);
      let contentPart = body;

      if (ansMatch && ansMatch.index !== undefined) {
        rawAns = ansMatch[1].trim();
        if (rawAns) ansStatus = 'verified';
        contentPart = body.substring(0, ansMatch.index);
      }

      // Split contentPart into lines
      const lines = contentPart.split('\n');

      // Regex for option lines (e.g. "- 1. text", "- A. text", "- (A) text", "A. text", "1. text", "- 1 text")
      const optionRegex = /^[ \t]*(?:-[ \t]*)?(?:\(?([A-Da-d1-6])[\.\)\s][ \t]*|\b([A-Da-d1-6])[\.\)][ \t]*)(.*?)(✓)?$/;

      let optionStartIdx = -1;
      const extractedOptions: string[] = [];

      // Scan backwards from the last non-empty line of contentPart to find the LAST contiguous block of options
      let i = lines.length - 1;
      while (i >= 0 && lines[i].trim() === '') {
        i--;
      }

      if (i >= 0) {
        const trailingLines: string[] = [];
        let curr = i;
        while (curr >= 0) {
          const lineTrim = lines[curr].trim();
          if (lineTrim === '') {
            break;
          }

          const match = lineTrim.match(optionRegex);
          if (match) {
            const optText = (match[3] || match[0]).replace(/✓$/, '').trim();
            if (match[4] === '✓' && !rawAns) {
              rawAns = optText;
              ansStatus = 'verified';
            }
            trailingLines.unshift(optText);
            optionStartIdx = curr;
            curr--;
          } else {
            break;
          }
        }

        if (trailingLines.length >= 2) {
          extractedOptions.push(...trailingLines);
        }
      }

      let qText = '';
      let options: string[] | null = null;

      if (extractedOptions.length >= 2 && optionStartIdx !== -1) {
        options = extractedOptions;
        qText = lines.slice(0, optionStartIdx).join('\n').trim();
      } else {
        options = null;
        qText = contentPart.trim();
      }

      const qTextClean = qText.replace(/\s+/g, '').trim();
      if (qTextClean.length < 10) {
        addWarning(file, currentQ, `Skipped empty/thin question: <10 chars (${qTextClean.length})`);
        return;
      }

      const rawHeadingForId = `${currentSection} - ${currentQ} - index ${qCount}`;
      const id = generateId(currentQ, file, rawHeadingForId);
      
      if (seenIds.has(id)) {
        console.warn(`DUPLICATE MCQ ID: ${id} in ${file}, section: ${currentSection}, Q: ${currentQ}`);
      }
      seenIds.add(id);

      const mcq: MCQItem = {
        id,
        paper: paperId,
        section: currentSection,
        questionNumber: currentQnum,
        question: qText,
        options,
        answer: { status: ansStatus, raw: rawAns || null },
        authorNote: null
      };

      const outPath = path.join(MCQ_DIR, `${id}.md`);
      // Put question text as markdown body, everything else as frontmatter
      const { question: qBodyText, ...mcqMeta } = mcq;
      const fm = writeFrontmatter(mcqMeta);
      fs.writeFileSync(outPath, fm + '\n' + (qBodyText || ''));
      summary.mcqs++;
      qCount++;
    };

    const lines = content.split('\n');
    for (const line of lines) {
      if (file.includes('pyq-300')) {
        if (line.match(/^## SECTION/i)) {
          processQ();
          currentSection = line.replace(/^## /, '').trim();
          if (!sections.includes(currentSection)) sections.push(currentSection);
          currentQ = '';
          qBody = '';
        } else if (line.match(/^### Question \d+/i)) {
          processQ();
          currentQ = line.replace(/^### /, '').trim();
          currentQnum = parseInt(currentQ.match(/\d+/)![0]);
          qBody = '';
        } else {
          if (currentQ) qBody += line + '\n';
        }
      } else {
        // papers — detect section headers using robust pattern matching
        const detectedSection = detectSection(line);
        if (detectedSection && !line.startsWith('### Question')) {
          processQ();
          currentSection = detectedSection;
          if (!sections.includes(currentSection)) sections.push(currentSection);
          currentQ = '';
          qBody = '';
        } else if (line.match(/^### Question \d+/i)) {
          processQ();
          currentQ = line.replace(/^### /, '').trim();
          const match = currentQ.match(/\d+/);
          currentQnum = match ? parseInt(match[0]) : 0;
          qBody = '';
        } else {
          if (currentQ) qBody += line + '\n';
        }
      }
    }
    processQ();

    const paper: Paper = {
      id: paperId,
      title: paperTitle,
      sourceFile: file,
      sections,
      questionCount: qCount
    };
    const paperOut = path.join(PAPERS_DIR, `${paperId}.md`);
    fs.writeFileSync(paperOut, writeFrontmatter(paper));
    summary.papers++;
  };

  parsePaper('materials/pyq-300.md');
  parsePaper('materials/solved-paper-2024-morning.md', true);
  
  for (let i = 1; i <= 10; i++) {
    const pStr = i.toString().padStart(2, '0');
    parsePaper(`materials/previous-papers/paper-${pStr}.md`);
  }
}

function writeCodingQuestions() {
  for (const q of codingQuestionsList) {
    const outPath = path.join(CODING_DIR, `${q.id}.md`);
    // Put problem text as markdown body, everything else as frontmatter
    const { problem, ...meta } = q;
    const fm = writeFrontmatter(meta);
    fs.writeFileSync(outPath, fm + '\n' + (problem || ''));
    summary.codingQuestions++;
  }
}

function writeReports() {
  fs.writeFileSync(path.join(DATA_DIR, 'id-map.json'), JSON.stringify(idMap, null, 2));
  
  let report = `# Ingestion Report\n\n`;
  report += `## Summary\n\n`;
  report += `- Coding Questions: ${summary.codingQuestions}\n`;
  report += `- MCQs: ${summary.mcqs}\n`;
  report += `- Papers: ${summary.papers}\n`;
  report += `- Topic Notes: ${summary.topicNotes}\n`;
  report += `- Warnings: ${summary.warnings}\n`;
  report += `- Cross-Ref Matches: ${summary.crossRefMatches}\n\n`;

  report += `## Warnings\n\n`;
  if (warnings.length === 0) {
    report += `No warnings.\n`;
  } else {
    for (const w of warnings) {
      report += `- **${w.file}** > ${w.heading}: ${w.reason}\n`;
    }
  }
  
  fs.writeFileSync(path.join(DATA_DIR, '_ingest-report.md'), report);
}

function run() {
  setupDirs();
  parseQuestionsMd();
  parseCoding50();
  parseHrQuestions();
  parseDsaPatterns();
  parseMcqPapers();
  writeCodingQuestions();
  writeReports();
  console.log('Ingestion complete. Summary:', summary);
}

run();

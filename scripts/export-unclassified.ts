import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CODING_DIR = path.join(ROOT, 'src', 'content', 'coding-questions');
const OUT_FILE = path.join(ROOT, 'data', 'classify-batch.json');

// Extremely simple frontmatter parser for our constrained format
function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = match[1];
  const obj: Record<string, any> = {};
  
  let currentKey = '';
  let inBlockArray = false;
  
  const lines = fm.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (inBlockArray) {
      if (line.startsWith('  - ')) {
        obj[currentKey].push(line.substring(4).trim().replace(/^"|"$/g, ''));
        continue;
      } else if (line.startsWith(' ') || line === '') {
        continue; // skip other indented things or empty lines
      } else {
        inBlockArray = false;
      }
    }
    
    if (line.includes(':') && !inBlockArray) {
      const idx = line.indexOf(':');
      const key = line.substring(0, idx).trim();
      const val = line.substring(idx + 1).trim();
      
      if (val === '') {
        if (lines[i+1] && lines[i+1].startsWith('  - ')) {
          currentKey = key;
          obj[key] = [];
          inBlockArray = true;
          continue;
        }
      }
      
      if (val === '[]') {
        obj[key] = [];
        continue;
      }
      
      obj[key] = val.replace(/^"|"$/g, '');
    }
  }
  return obj;
}

function run() {
  if (!fs.existsSync(CODING_DIR)) {
    console.log('No coding questions directory found.');
    return;
  }

  const files = fs.readdirSync(CODING_DIR).filter(f => f.endsWith('.md'));
  const exportBatch: any[] = [];

  for (const file of files) {
    const filePath = path.join(CODING_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const fm = parseFrontmatter(content);
    
    const isUnclassified = fm.difficulty === 'unclassified' || fm.status === 'unclassified' || !fm.topics || fm.topics.length === 0;
    
    if (isUnclassified) {
      // Body is everything after the second ---
      const parts = content.split('---');
      const body = parts.length >= 3 ? parts.slice(2).join('---').trim() : '';
      
      exportBatch.push({
        id: fm.id,
        title: fm.title,
        status: fm.status,
        difficulty: fm.difficulty,
        topics: fm.topics || [],
        problem: body
      });
    }
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(exportBatch, null, 2));
  console.log(`Exported ${exportBatch.length} unclassified questions to ${OUT_FILE}`);
}

run();

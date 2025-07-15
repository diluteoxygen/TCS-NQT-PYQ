import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CODING_DIR = path.join(ROOT, 'src', 'content', 'coding-questions');
const BATCH_FILE = path.join(ROOT, 'data', 'classify-batch.json');

const VALID_STATUS = ['verified_pyq', 'practice', 'unclassified'];
const VALID_DIFFICULTY = ['easy', 'medium', 'hard', 'unclassified'];

function validateTags(item: any): string[] {
  const errs: string[] = [];
  if (!VALID_STATUS.includes(item.status)) errs.push(`Invalid status: ${item.status}`);
  if (!VALID_DIFFICULTY.includes(item.difficulty)) errs.push(`Invalid difficulty: ${item.difficulty}`);
  if (!Array.isArray(item.topics)) errs.push(`Topics must be an array`);
  return errs;
}

function run() {
  if (!fs.existsSync(BATCH_FILE)) {
    console.log('No classify-batch.json found.');
    return;
  }

  const batch = JSON.parse(fs.readFileSync(BATCH_FILE, 'utf-8'));
  let updated = 0;
  let errors = 0;

  for (const item of batch) {
    if (!item.id) {
      console.error('Item missing ID:', item);
      errors++;
      continue;
    }

    const errs = validateTags(item);
    if (errs.length > 0) {
      console.error(`Validation errors for ${item.id}:`, errs.join(', '));
      errors++;
      continue;
    }

    const filePath = path.join(CODING_DIR, `${item.id}.md`);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found for ${item.id}`);
      errors++;
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Naive frontmatter replacement
    // We only replace difficulty, status, and topics lines.
    
    let newContent = content;
    
    // Replace difficulty
    newContent = newContent.replace(/^difficulty:.*$/m, `difficulty: ${item.difficulty}`);
    // Replace status
    newContent = newContent.replace(/^status:.*$/m, `status: ${item.status}`);
    
    // Replace topics
    // Find the topics array in the original
    const topicsMatch = newContent.match(/^topics:.*?(\n(?:  - .*?\n)*)/m);
    if (topicsMatch) {
      let replacement = `topics:`;
      if (item.topics.length === 0) {
        replacement += ` []\n`;
      } else {
        replacement += `\n`;
        for (const t of item.topics) {
          replacement += `  - "${t}"\n`;
        }
      }
      newContent = newContent.replace(topicsMatch[0], replacement);
    } else {
       // if topics key isn't found exactly like that, just replace an empty one
       newContent = newContent.replace(/^topics: \[\]\n/m, () => {
         if (item.topics.length === 0) return `topics: []\n`;
         let r = `topics:\n`;
         for (const t of item.topics) {
           r += `  - "${t}"\n`;
         }
         return r;
       });
    }

    fs.writeFileSync(filePath, newContent);
    updated++;
  }

  console.log(`Import complete. Updated ${updated} files. Errors: ${errors}`);
}

run();

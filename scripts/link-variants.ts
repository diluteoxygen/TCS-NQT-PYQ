import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirPath = path.join(__dirname, '../src/content/coding-questions');

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

const docs = files.map(file => {
  const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
  const titleMatch = content.match(/title:\s*(.*)/);
  const title = titleMatch ? titleMatch[1].replace(/['"]/g, '').trim() : '';
  return {
    id: file.replace('.md', ''),
    file,
    content,
    title,
    variants: [] as string[]
  };
});

// Manual pairs
const pairs = [
  ['chocolate-packets-move-empty-packets-to-end-93bb0662', 'move-all-zeros-to-end-06cc7fb6'],
  ['sort-array-of-0s-1s-and-2s-dutch-national-flag-b6a056f6', 'question-5-3ee5942b', 'question-5-64cf2f54'] // Example of others if known
];

for (const pair of pairs) {
  for (let i = 0; i < pair.length; i++) {
    for (let j = 0; j < pair.length; j++) {
      if (i === j) continue;
      const doc = docs.find(d => d.id === pair[i]);
      if (doc && !doc.variants.includes(pair[j])) {
        // Also check if pair[j] exists
        if (docs.some(d => d.id === pair[j])) {
          doc.variants.push(pair[j]);
        }
      }
    }
  }
}

// Re-write frontmatters
let updatedCount = 0;
for (const doc of docs) {
  if (doc.variants.length > 0) {
    if (!doc.content.includes('variants:')) {
      const updated = doc.content.replace(
        /(status:.*)/,
        `$1\nvariants: [${doc.variants.map(v => `'${v}'`).join(', ')}]`
      );
      fs.writeFileSync(path.join(dirPath, doc.file), updated);
      console.log(`Updated ${doc.id} with ${doc.variants.length} variants: ${doc.variants.join(', ')}`);
      updatedCount++;
    } else {
      // If it exists, replace it
      const updated = doc.content.replace(
        /variants:\s*\[.*?\]/,
        `variants: [${doc.variants.map(v => `'${v}'`).join(', ')}]`
      );
      fs.writeFileSync(path.join(dirPath, doc.file), updated);
    }
  }
}
console.log(`Finished. Updated ${updatedCount} files.`);

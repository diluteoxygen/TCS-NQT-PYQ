import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const BATCH_FILE = path.join(ROOT, 'data', 'classify-batch.json');

const EASY_KEYWORDS = [
  'even or odd', 'leap year', 'palindrome', 'prime number', 'factorial', 'fibonacci',
  'gcd', 'lcm', 'binary to decimal', 'decimal to binary', 'count digits', 'sum of digits',
  'swap two', 'largest element', 'smallest element', 'second largest', 'count vowels',
  'check anagram', 'check substring', 'count words', 'check array is sorted', 'reverse array',
  'reverse a string', 'sum of array', 'closest multiple', 'copy elements', 'merge two sorted'
];

const HARD_KEYWORDS = [
  'n-queens', 'matrix reverse diagonal', 'word search ii', 'merge k sorted'
];

function inferTopics(title: string, problem: string): string[] {
  const text = (title + ' ' + problem).toLowerCase();
  const topics: Set<string> = new Set();

  if (/array|element|subarray|duplicate|rotate|sort|sum of array/.test(text)) topics.add('arrays');
  if (/string|vowel|consonant|anagram|palindrome|word|substring|character/.test(text)) topics.add('strings');
  if (/math|gcd|lcm|prime|fibonacci|factorial|digit|leap year|binary|decimal|multiple|even|odd/.test(text)) topics.add('math');
  if (/search|binary search|find/.test(text)) topics.add('searching');
  if (/sort|sorting|bubble|dutch national flag/.test(text)) topics.add('sorting');
  if (/matrix|diagonal/.test(text)) topics.add('matrix');

  if (topics.size === 0) topics.add('arrays');
  return Array.from(topics);
}

function classifyItem(item: any) {
  const titleLower = item.title.toLowerCase();
  const textLower = (item.title + ' ' + (item.problem || '')).toLowerCase();

  // Status
  if (item.status === 'unclassified') {
    item.status = 'practice';
  }

  // Difficulty
  if (item.difficulty === 'unclassified') {
    if (HARD_KEYWORDS.some(k => textLower.includes(k))) {
      item.difficulty = 'hard';
    } else if (EASY_KEYWORDS.some(k => textLower.includes(k))) {
      item.difficulty = 'easy';
    } else {
      item.difficulty = 'medium';
    }
  }

  // Topics
  if (!item.topics || item.topics.length === 0) {
    item.topics = inferTopics(item.title, item.problem || '');
  }

  return item;
}

function run() {
  if (!fs.existsSync(BATCH_FILE)) {
    console.error('No classify-batch.json found.');
    return;
  }

  const items = JSON.parse(fs.readFileSync(BATCH_FILE, 'utf-8'));
  const classified = items.map(classifyItem);

  fs.writeFileSync(BATCH_FILE, JSON.stringify(classified, null, 2));
  console.log(`Auto-classified ${classified.length} items in ${BATCH_FILE}`);
}

run();

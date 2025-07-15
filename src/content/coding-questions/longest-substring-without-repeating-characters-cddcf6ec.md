---
id: longest-substring-without-repeating-characters-cddcf6ec
title: Longest Substring Without Repeating Characters
sourceFile: questions.md
status: practice
difficulty: medium
topics:
- strings
- sliding-window
constraints: null
sampleInput: abcabcbb
sampleOutput: '3'
explanation: 'Longest substring without repeat: "abc" (length 3)'
hint: 'Sliding window + HashSet. Expand right pointer; when duplicate found, shrink
  left pointer.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given a string, find the length of the longest substring that has no repeating characters.

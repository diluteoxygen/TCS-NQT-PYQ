---
id: 6-may-2024-shift-2-first-non-repeating-character-5ec79df8
title: 6 May 2024 Shift 2 — First Non-Repeating Character
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- strings
- hashing
constraints: null
sampleInput: aabbcde
sampleOutput: c
explanation: null
hint: 'Use OrderedDict or two-pass: first build frequency dict, then scan string left-to-right
  for freq==1.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given a string, find the first character that does not repeat. If all characters repeat, print -1.

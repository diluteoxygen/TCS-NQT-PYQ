---
id: curtain-factory-max-aqua-curtains-in-any-box-465211a4
title: Curtain Factory — Max Aqua Curtains in Any Box
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- strings
constraints: 1<=L<=10, 1<=N<=50
sampleInput: 'bbbaaababa

  3

  '
sampleOutput: '3'
explanation: 'Groups of 3: bbb, aaa, bab, a. Max a count = 3 (group 2).'
hint: 'chunk string in groups of L using range(0,len(s),L). Count ''a'' in each chunk.
  Return max.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

String of a/b chars (N length). Pack into boxes of L chars. Find box with MAXIMUM number of 'a' chars. Leftover chars after N//L groups form another box.

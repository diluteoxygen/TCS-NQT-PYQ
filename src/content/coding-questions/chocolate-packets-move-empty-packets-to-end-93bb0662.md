---
id: chocolate-packets-move-empty-packets-to-end-93bb0662
title: Chocolate Packets — Move Empty Packets to End
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- arrays
constraints: 1 <= N <= 10\*\*5
sampleInput: '8

  4 5 0 1 9 0 5 0

  '
sampleOutput: 4 5 1 9 5 0 0 0
explanation: null
hint: 'Use a write pointer j=0. Copy non-zero elements to arr[j++]. Fill remaining
  indices with 0.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A factory produces N chocolate packets. Empty (defective) packets are represented as 0. Push all empty packets (0s) to the end of the array while maintaining the relative order of non-zero (filled) packets. Input: First line = N (number of packets). Second line = N space-separated integers.

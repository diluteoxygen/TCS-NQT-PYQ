---
id: inventory-frequency-counter-18f3d4a1
title: Inventory Frequency Counter
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- arrays
- strings
- hashing
constraints: null
sampleInput: apple banana apple orange banana apple
sampleOutput: 'apple 3

  banana 2

  orange 1

  '
explanation: null
hint: 'Split by space. Check each char — if digit found, print Invalid input and return.
  Else use dict to count frequency.

  '
note: If input contains digits e.g. "apple123 banana" → print "Invalid input"
referenceCode: null
ambiguousFormat: false
---

Given a string of space-separated item names (inventory), count how many times each item appears. If the input contains any digit, print "Invalid input" and stop. Print each item and its count.

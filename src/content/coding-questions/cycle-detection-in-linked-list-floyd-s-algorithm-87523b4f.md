---
id: cycle-detection-in-linked-list-floyd-s-algorithm-87523b4f
title: Cycle Detection in Linked List (Floyd's Algorithm)
sourceFile: questions.md
status: practice
difficulty: medium
topics:
- linked-list
constraints: null
sampleInput: 1 -> 2 -> 3 -> 4 -> 2 (cycle back to node 2)
sampleOutput: Cycle Detected
explanation: null
hint: 'Slow pointer moves 1 step, fast pointer moves 2 steps. If they meet → cycle.
  If fast=NULL → no cycle.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given a linked list, detect if there is a cycle. Print "Cycle Detected" or "No Cycle".

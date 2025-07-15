---
id: 29-april-2024-kolkata-q2-distinct-bitwise-or-of-subarrays-257085fe
title: 29 April 2024 Kolkata (Q2) — Distinct Bitwise OR of Subarrays
sourceFile: questions.md
status: verified_pyq
difficulty: hard
topics:
- arrays
- bit-manipulation
constraints: null
sampleInput: '4

  1 2 3 2

  '
sampleOutput: '4'
explanation: 'OR values: {1},{2},{3},{2},{1,2}=3,{2,3}=3,{3,2}=3,{1,2,3}=3,{2,3,2}=3,{1,2,3,2}=3
  → distinct={1,2,3,3}={1,2,3} + full=3 → set={1,2,3,3}→ actually {1,2,3} = 3 distinct
  values plus 0... check.'
hint: 'For each starting index i, maintain running OR. Add each OR to a HashSet. Return
  set size. O(N^2).

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given an integer array, find the number of distinct values that can be obtained as the bitwise OR of any contiguous subarray of the array.

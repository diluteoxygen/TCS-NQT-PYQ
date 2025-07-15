---
id: 26-april-2024-all-subarrays-with-sum-equal-to-k-3098b0b4
title: 26 April 2024 — All Subarrays with Sum Equal to K
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- arrays
constraints: null
sampleInput: 1 2 3 4 ,6
sampleOutput: '1 2 3

  2 4

  6

  '
explanation: null
hint: 'Parse input until non-integer char (comma). Use brute force O(N^2): for each
  i, sum from i to j until sum>=K.

  '
note: The ambiguous I/O format is intentional — TCS NQT sometimes has unclear input
  specs. Practice parsing!
referenceCode: null
ambiguousFormat: true
---

Find and print all contiguous subarrays of a given array whose elements sum equals K. Note: Input format is unusual — integers separated by spaces, with a comma before K. Example input line: 1 2 3 4 5 -4 -3 ,10 (comma separates array from K) Print each qualifying subarray on a separate line.

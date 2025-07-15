---
id: odd-occurring-element-in-o-log-n-8adeae62
title: Odd Occurring Element in O(log N)
sourceFile: questions.md
status: verified_pyq
difficulty: hard
topics:
- arrays
- hashing
- searching
constraints: 1 <= N <= 10\*\*5 (N is always odd)
sampleInput: '5

  2 2 3 1 1

  '
sampleOutput: '3'
explanation: Element 3 appears once (odd), while 2 and 1 each appear twice (even).
hint: 'Binary search: if mid index is even and arr[mid]==arr[mid+1], the odd one is
  to the right; else to the left.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given an array of integers where every element appears an even number of times except one element which appears an odd number of times, find that odd-occurring element in O(log N) time. Conditions: Equal elements must appear in pairs in the array; no more than two consecutive occurrences of any element are allowed. Example of INVALID input (3 consecutive 2s): 7 → 1 1 2 2 2 3 3 Example of VALID input: 5 → 2 2 3 1 1 → Answer: 3

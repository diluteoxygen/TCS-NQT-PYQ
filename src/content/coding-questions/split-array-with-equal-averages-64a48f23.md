---
id: split-array-with-equal-averages-64a48f23
title: Split Array with Equal Averages
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- arrays
- math
constraints: null
sampleInput: '4

  1 2 3 4

  '
sampleOutput: 'false'
explanation: null
hint: 'For each split point i (1 to n-1): check if leftSum*(n-i) == rightSum*i. If
  yes for any i, return true.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given an array of N integers, check if it can be split into two non-empty contiguous parts such that both parts have equal averages. Print "true" if possible, "false" otherwise.

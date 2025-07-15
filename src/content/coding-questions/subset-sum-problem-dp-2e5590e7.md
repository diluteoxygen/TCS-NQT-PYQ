---
id: subset-sum-problem-dp-2e5590e7
title: Subset Sum Problem (DP)
sourceFile: questions.md
status: verified_pyq
difficulty: hard
topics:
- arrays
- dp
constraints: null
sampleInput: '5 9

  3 1 4 2 2

  '
sampleOutput: 'YES'
explanation: null
hint: 'DP: dp[j] = True if sum j is achievable. For each element, update dp from right
  to left.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given an array and a target sum S, determine if there exists a subset with sum equal to S.

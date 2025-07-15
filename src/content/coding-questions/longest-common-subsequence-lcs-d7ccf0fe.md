---
id: longest-common-subsequence-lcs-d7ccf0fe
title: Longest Common Subsequence (LCS)
sourceFile: questions.md
status: practice
difficulty: hard
topics:
- strings
- dp
constraints: null
sampleInput: 'ABCBDAB

  BDCABA

  '
sampleOutput: '4'
explanation: LCS = BCBA (length 4)
hint: 'dp[i][j] = LCS of s1[:i] and s2[:j]. If chars match: dp[i][j]=dp[i-1][j-1]+1,
  else max(left, up).

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given two strings, find the length of their Longest Common Subsequence (LCS).

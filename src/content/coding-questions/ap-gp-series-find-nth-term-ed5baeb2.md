---
id: ap-gp-series-find-nth-term-ed5baeb2
title: 'AP/GP Series: Find Nth Term'
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- series
constraints: null
sampleInput: 'AP

  2 3 5

  '
sampleOutput: '14'
explanation: 'AP with A=2, D=3, N=5: 2 + (5-1)\*3 = 2 + 12 = 14'
hint: 'Check series type. For AP: a+(n-1)_d. For GP: a_(r\*\*(n-1)). Handle both.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given first term A, common difference D (for AP) or common ratio R (for GP), and N: - If series type is AP: Nth term = A + (N-1)_D - If series type is GP: Nth term = A _ R^(N-1) Input: series type (AP/GP), first term, difference/ratio, and N.

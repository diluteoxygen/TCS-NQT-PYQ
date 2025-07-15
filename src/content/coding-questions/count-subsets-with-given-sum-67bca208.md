---
id: count-subsets-with-given-sum-67bca208
title: Count Subsets with Given Sum
sourceFile: questions.md
status: verified_pyq
difficulty: hard
topics:
- arrays
constraints: 1<=T<=100, 1<=n<=10**3, 1<=a[i]<=10**3, 1<=sum<=10\*\*3
sampleInput: '2

  6

  2 3 5 6 8 10

  10

  5

  1 2 3 4 5

  10

  '
sampleOutput: '3

  3

  '
explanation: 'Test 1: subsets (2,3,5), (2,8), (10) = 3. Test 2: (1,2,3,4), (2,3,5),
  (1,4,5) = 3'
hint: 'DP approach: dp[i][j] = number of subsets of first i elements that sum to j.
  Or use bitmask for small n.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given an array of integers and a target sum S, count all subsets of the array whose elements sum equals S. Since the result can be very large, print the value modulo 10^9+7. Input: First line = T (test cases). Each test case: first line = n (array size), second line = n space-separated integers, third line = target sum.

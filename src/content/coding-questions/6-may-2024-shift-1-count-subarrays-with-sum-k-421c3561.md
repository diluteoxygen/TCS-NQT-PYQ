---
id: 6-may-2024-shift-1-count-subarrays-with-sum-k-421c3561
title: 6 May 2024 Shift 1 — Count Subarrays with Sum = K
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- arrays
constraints: 1 <= len(nums) <= 2\*10\*\*4, -1000 <= nums[i] <= 1000
sampleInput: 1 2 3 4 5 -4 -3 ,10
sampleOutput: '2'
explanation: 'Subarrays summing to 10: [1,2,3,4] and [3,4,5,-4,-3+10... check carefully
  with prefix sum]'
hint: 'Use prefix sum + hashmap. For each index, check count of (prefix_sum - K) in
  map. O(N) time.

  '
note: null
referenceCode: null
ambiguousFormat: true
---

Given a sequence of integers "nums" and an integer K, find the total count of contiguous subarrays whose elements sum equals exactly K. Input: comma-separated integers followed by comma then K value.

---
id: minimum-coin-change-d0f7e34e
title: Minimum Coin Change
sourceFile: questions.md
status: practice
difficulty: hard
topics:
- dp
constraints: null
sampleInput: '3 11

  1 5 6

  '
sampleOutput: '2'
explanation: 5+6=11, using 2 coins
hint: 'DP: dp[0]=0, dp[i]=min(dp[i-c]+1) for each coin c. Initialize dp with infinity.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given coin denominations and a target amount, find the minimum number of coins needed.

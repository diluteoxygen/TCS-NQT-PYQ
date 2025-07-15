---
id: xor-coin-denomination-story-based-c79b3681
title: XOR Coin Denomination (Story-Based)
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- bit-manipulation
constraints: 1 <= N <= 10\*\*5 (N is always odd after the loss)
sampleInput: '7

  1 1 2 2 3 3 4

  '
sampleOutput: '4'
explanation: 'XOR of all values: 1^1^2^2^3^3^4 = 4. The lone coin is the lost denomination.'
hint: 'XOR all elements. All paired coins cancel to 0; only the odd-occurring denomination
  remains.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A shopkeeper has coins of several denominations. Initially there are an even number of coins of each type. One coin is lost. Find the denomination of the lost coin. Input: First line = N (total coins remaining). Second line = N space-separated coin values.

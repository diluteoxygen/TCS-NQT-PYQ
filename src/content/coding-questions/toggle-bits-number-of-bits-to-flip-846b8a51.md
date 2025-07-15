---
id: toggle-bits-number-of-bits-to-flip-846b8a51
title: Toggle Bits — Number of Bits to Flip
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- bit-manipulation
constraints: null
sampleInput: 10 20
sampleOutput: '4'
explanation: 10 = 01010, 20 = 10100. XOR = 11110 → 4 set bits → 4 flips needed.
hint: 'XOR both numbers. Count set bits in XOR result using bin(a^b).count("1").

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given two integers A and B, find the number of bits that need to be flipped to convert A to B. (i.e., count the number of set bits in A XOR B)

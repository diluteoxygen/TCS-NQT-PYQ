---
id: toggle-all-bits-after-msb-including-msb-5ce83887
title: Toggle All Bits After MSB (Including MSB)
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: 1<=N<=100
sampleInput: '10'
sampleOutput: '5'
explanation: 10 = 1010 binary. Toggle all 4 bits = 0101 = 5.
hint: 'k = (1 << (floor(log2(N))+1)) - 1. Answer = N XOR k.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given positive integer N, convert to binary and toggle ALL bits (including MSB). Print resulting integer.

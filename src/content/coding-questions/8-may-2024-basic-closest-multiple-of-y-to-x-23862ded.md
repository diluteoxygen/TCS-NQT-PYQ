---
id: 8-may-2024-basic-closest-multiple-of-y-to-x-23862ded
title: 8 May 2024 (Basic) — Closest Multiple of Y to X
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics: []
constraints: -10**5 < x < 10**5, Y > 0
sampleInput: '15

  4

  '
sampleOutput: '16'
explanation: 'Multiples of 4 near 15: 12 and 16. Distance: |15-12|=3, |15-16|=1. Closest
  = 16.'
hint: 'lower = (x//y)\*y, upper = lower+y. Compare abs(x-lower) vs abs(x-upper). Return
  closer (upper if tie).

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given two integers X and Y, find the multiple of Y that is closest to X. If there are two equally close multiples, return the larger one.

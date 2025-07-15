---
id: digit-sum-repeatedly-until-single-digit-2913cbf8
title: Digit Sum (Repeatedly Until Single Digit)
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: null
sampleInput: '9875'
sampleOutput: '2'
explanation: null
hint: 'Digital root formula: 1 + (n-1)%9 for n>0. Or loop: while n>=10: n = sum of
  digits.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given a number N, repeatedly sum its digits until you get a single digit. Print that digit. Example: 9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2

---
id: perfect-donation-amount-44c4babb
title: Perfect Donation Amount
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: null
sampleInput: '28'
sampleOutput: 'true'
explanation: null
hint: 'Sum divisors from 1 to sqrt(N). For each i dividing N, add both i and N/i (if
  different). Exclude N itself.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A charity accepts donations only in "perfect" amounts. A perfect number equals the sum of all its proper divisors (excluding itself). Given a donation amount N, check if it is a perfect number. Print true or false. Example: 28 = 1+2+4+7+14 = 28 → perfect. 6 = 1+2+3 = 6 → perfect.

---
id: book-exchange-derangement-count-b3b3d870
title: Book Exchange — Derangement Count
sourceFile: questions.md
status: verified_pyq
difficulty: hard
topics:
- math
constraints: 1 <= N <= 1000000
sampleInput: '4'
sampleOutput: '9'
explanation: null
hint: 'Derangement recurrence: D(n) = (n-1) \* (D(n-1) + D(n-2)). Base: D(1)=0, D(2)=1.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A teacher distributes N books to N students and wants to exchange them weekly so every student gets a different book (not their own). Find the total number of valid exchanges (derangements) modulo 10^7+7. Example: N=4 → 9 valid exchanges (no student gets their original book).

---
id: alice-s-verbal-kho-kho-digit-passing-game-7d390200
title: Alice's Verbal Kho-Kho — Digit Passing Game
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics: []
constraints: null
sampleInput: '3

  5

  7

  '
sampleOutput: '2'
explanation: Start=5, 3 friends, final=7. Confusions = (7-5+10)%10 = 2.
hint: 'confusions = (final - start + 10) % 10. This works due to modular arithmetic.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Alice gives a digit to F[1]. Each friend passes the digit to the next without speaking. A confused friend passes digit+1 (wraps: 9->0). Others pass correctly. Given starting digit S, N friends, and final digit F, find how many confusions occurred.

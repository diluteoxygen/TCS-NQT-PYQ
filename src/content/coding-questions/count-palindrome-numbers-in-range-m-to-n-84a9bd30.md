---
id: count-palindrome-numbers-in-range-m-to-n-84a9bd30
title: Count Palindrome Numbers in Range M to N
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- strings
constraints: M <= N, both non-negative integers
sampleInput: '10

  20

  '
sampleOutput: '1'
explanation: Only 11 is a palindrome between 10 and 20.
hint: 'For each number i from M to N: convert to string, check if str(i)==str(i)[::-1].
  Count matches.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given two integers M and N (M <= N), count how many numbers in the range [M, N] (inclusive) are palindromes. A palindrome number reads the same forwards and backwards. Example: 11, 121, 131, 9 are palindromes.

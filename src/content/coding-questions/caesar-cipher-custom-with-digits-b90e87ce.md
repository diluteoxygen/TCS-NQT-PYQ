---
id: caesar-cipher-custom-with-digits-b90e87ce
title: Caesar Cipher (Custom — With Digits)
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- strings
constraints: 1 <= K <= 25
sampleInput: 'Hello World! 5

  2

  '
sampleOutput: Jgnnq Yqtnf! 7
explanation: null
hint: 'For each char: if upper, chr((ord(c)-65+K)%26+65). If lower, chr((ord(c)-97+K)%26+97).
  If digit, chr((ord(c)-48+K)%10+48). Else unchanged.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Implement a Caesar Cipher that works on both alphabets AND digits. Given a plaintext string and a key K (shift value 1-25): - Uppercase letters: shift within A-Z (wrap around) - Lowercase letters: shift within a-z (wrap around) - Digits (0-9): shift within 0-9 (wrap around) - Special characters: remain unchanged Example: Key=2, "Hello World! 5" → "Jgnnq Yqtnf! 7"

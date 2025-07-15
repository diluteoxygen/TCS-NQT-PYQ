---
id: 8-may-2024-advanced-password-validator-caesar-cipher-cd5cb344
title: 8 May 2024 (Advanced) — Password Validator + Caesar Cipher
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- strings
constraints: 1 <= n <= 25
sampleInput: 'T@nuJ@in13

  2

  '
sampleOutput: VBpwLBkp35
explanation: null
hint: 'Use regex or manual checks for validation. For encryption, handle uppercase,
  lowercase, digit separately with modular arithmetic.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Take a string "password" as input and perform two operations: VALIDATE: Check that the password satisfies ALL of these conditions: 1. Length >= 8 2. Contains at least one digit (0-9) 3. Contains at least one special character 4. Contains at least one uppercase letter 5. Contains at least one lowercase letter If ANY condition fails, print "Error!" ENCRYPT (only if valid): Apply Caesar Cipher — shift each character and digit by N positions. Input n (shift integer) after the password. Wrap around: Z+1=A, 9+1=0. Return the encrypted string. Example: password = "T@nuJ@in13", n=2 → "VBpwLBkp35"

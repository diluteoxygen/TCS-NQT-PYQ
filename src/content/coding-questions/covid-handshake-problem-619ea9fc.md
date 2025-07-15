---
id: covid-handshake-problem-619ea9fc
title: COVID Handshake Problem
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: 1<=T<=1000, 0<N<10\*\*6
sampleInput: '2

  1

  2

  '
sampleOutput: '0

  1

  '
explanation: '1 person → 0 handshakes. 2 people → 1 handshake. Formula: N\*(N-1)/2'
hint: 'Total handshakes = N\*(N-1)/2. Use long long to avoid overflow for large N.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Before the outbreak of coronavirus, a meeting took place in Wuhan. A person who attended had COVID-19 and everyone shook hands with everyone else exactly once. Given N people in the room, find the total number of handshakes. Input: First line = T (test cases). Each following line = N (number of people).

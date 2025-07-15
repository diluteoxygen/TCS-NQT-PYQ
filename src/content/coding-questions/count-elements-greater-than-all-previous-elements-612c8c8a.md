---
id: count-elements-greater-than-all-previous-elements-612c8c8a
title: Count Elements Greater Than All Previous Elements
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- arrays
constraints: 1<=N<=20, 1<=arr[i]<=10000
sampleInput: '5

  7

  4

  8

  2

  9

  '
sampleOutput: '3'
explanation: arr=[7,4,8,2,9]. 7=first(count), 8>7(count), 9>8(count). Total=3.
hint: 'Track running max. Count++ whenever element > max_so_far, update max.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given array of N integers, count elements strictly greater than ALL previous elements. First element always counts.

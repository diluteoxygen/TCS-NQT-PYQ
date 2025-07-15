---
id: count-sundays-in-n-days-from-a-given-start-day-f805face
title: Count Sundays in N Days from a Given Start Day
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- strings
constraints: null
sampleInput: 'mon

  13

  '
sampleOutput: '2'
explanation: 'Starting Monday: first Sunday in 6 days, next in 13 days. Total = 2.'
hint: 'Map: mon=6,tue=5,wed=4,thu=3,fri=2,sat=1,sun=0. If N >= days_to_sun: ans =
  1 + (N - days_to_sun)//7

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given start day as string (mon/tue/wed/thu/fri/sat/sun) and N (number of days), count how many Sundays fall within N days.

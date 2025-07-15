---
id: 26-april-2024-shift-1-average-sales-calculation-35efee18
title: 26 April 2024 Shift 1 — Average Sales Calculation
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: null
sampleInput: '3

  apple 1.0 5

  orange 10.0 5

  kiwi 10.0 2

  '
sampleOutput: 'Average Sales: 25.0'
explanation: 'Sales: 1*5=5, 10*5=50, 10\*2=20 → Total=75 → Average=75/3=25.0'
hint: 'Read each item, compute price\*qty, accumulate total, divide by N. Use float
  division.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A shopkeeper has N items for sale. Each item has a name, price per unit, and quantity. Calculate the average sales value across all items. Average Sales = (Sum of price \* quantity for all items) / N Input: First line = N. Next N lines: item_name price quantity

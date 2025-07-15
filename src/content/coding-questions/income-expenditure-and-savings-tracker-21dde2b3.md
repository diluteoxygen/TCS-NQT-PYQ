---
id: income-expenditure-and-savings-tracker-21dde2b3
title: Income, Expenditure and Savings Tracker
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics: []
constraints: null
sampleInput: '5000

  Food

  1200

  Rent

  2000

  done

  '
sampleOutput: 'Total Income: 5000

  Total Savings: 1800

  Food: 1200

  Rent: 2000

  '
explanation: null
hint: 'Use a dictionary to track expenditure categories. Sum all expenditures for
  savings calculation.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Write a program that continuously takes user input: - Income (amount earned) - Type of Material (category of expenditure) - Expenditure on that Material (amount spent) The input continues until the user enters "done". Then display: 1. Total income 2. Total savings (Income - Total Expenditure) 3. List of where money was spent with respective amounts

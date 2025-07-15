---
id: mpcs-fitness-test-average-oxygen-level-of-trainees-179c3ada
title: MPCS Fitness Test — Average Oxygen Level of Trainees
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- math
constraints: null
sampleInput: '95 88 91

  78 82 85

  70 75 72

  '
sampleOutput: 'Most fit trainee: 1

  Average Oxygen Level: 91.33

  '
explanation: null
hint: '2D array 3x3. For each trainee, compute average. Find max average. Print all
  trainees achieving that max. If max < 70 → unfit.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A batch of 3 trainees runs for 3 rounds. Record their oxygen level after every round (value must be between 1 and 100, else re-prompt). After all rounds, calculate each trainee's average oxygen level and select the trainee(s) with the highest average as "most fit". If all averages are below 70, declare "All trainees are unfit." Round average oxygen values before comparing.

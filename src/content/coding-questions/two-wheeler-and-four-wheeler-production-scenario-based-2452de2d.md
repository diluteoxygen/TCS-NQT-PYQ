---
id: two-wheeler-and-four-wheeler-production-scenario-based-2452de2d
title: Two-Wheeler and Four-Wheeler Production (Scenario-Based)
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: V > 0, W > 0, W must be even, FW and TW must be non-negative integers
sampleInput: '12

  32

  '
sampleOutput: 'TW = 8

  FW = 4

  '
explanation: 'FW=(32-24)/2=4, TW=12-4=8. Verify: 8+4=12 vehicles, 16+16=32 wheels.
  Correct!'
hint: 'Check: if (W-2V) is negative or odd or FW > V → print INVALID INPUT.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

An automobile company manufactures both two-wheelers (TW) and four-wheelers (FW). Given: - Total number of vehicles (TW + FW) = V - Total number of wheels = W Find how many two-wheelers and four-wheelers need to be manufactured. Print "INVALID INPUT" if the inputs don't satisfy valid constraints (e.g. negative counts). Formula: TW + FW = V and 2*TW + 4*FW = W Solve: FW = (W - 2V) / 2, TW = V - FW

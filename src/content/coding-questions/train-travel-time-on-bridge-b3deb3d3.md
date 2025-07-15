---
id: train-travel-time-on-bridge-b3deb3d3
title: Train Travel Time on Bridge
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: null
sampleInput: '72'
sampleOutput: '40'
explanation: Speed = 72 \* 5/18 = 20 m/s. Time = 800/20 = 40 seconds.
hint: 'speed_ms = speed_kmh \* 5/18. time = 800 / speed_ms. Print as integer.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

A train covers a total distance of 800 meters (400m track length + 400m bridge length). Given the speed of the train in km/hr, calculate the time taken to completely cross the bridge in seconds. Formula: Time (seconds) = (Total Distance in metres / Speed in m/s) Convert km/hr to m/s by multiplying by (5/18).

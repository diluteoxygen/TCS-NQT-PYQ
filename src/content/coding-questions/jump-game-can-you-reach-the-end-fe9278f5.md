---
id: jump-game-can-you-reach-the-end-fe9278f5
title: Jump Game — Can You Reach the End?
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- arrays
- dp
constraints: null
sampleInput: 2,3,1,1,4
sampleOutput: 'true'
explanation: From index 0 jump 2 → index 2. From index 2 jump 1 → index 3. From index
  3 jump 1 → last index.
hint: 'Track maxReach. For each index i <= maxReach: maxReach = max(maxReach, i+nums[i]).
  If maxReach >= n-1, return true.

  '
note: null
referenceCode: null
ambiguousFormat: true
---

Given an array where each element represents the maximum number of steps you can jump forward from that position, determine if you can reach the last index starting from index 0. Print "true" if reachable, "false" otherwise.

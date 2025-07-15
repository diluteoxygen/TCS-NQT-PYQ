---
id: 8-jump-game-ii-d5644e35
title: "Pattern 3 (Inferred): 8. Jump Game II"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given an array of non-negative integers nums, where each element represents
your maximum jump length from that position, return the minimum number of jumps to
reach the last index.
### Java

```java
public int jump(int[] nums) {
int jumps = 0, currentEnd = 0, farthest = 0;
for (int i = 0; i < nums.length - 1; i++) {
farthest = Math.max(farthest, i + nums[i]);
if (i == currentEnd) {
jumps++;
currentEnd = farthest;
}
}
return jumps;
}
```

### C++

```cpp
int jump(vector<int>& nums) {
int jumps = 0, currentEnd = 0, farthest = 0;
for (int i = 0; i < nums.size() - 1; i++) {
farthest = max(farthest, i + nums[i]);
if (i == currentEnd) {
jumps++;
currentEnd = farthest;
}
}
return jumps;
}
```

### Python

```python
def jump(nums):
```

jumps, current_end, farthest = 0, 0, 0
for i in range(len(nums) - 1):
farthest = max(farthest, i + nums[i])
if i == current_end:
jumps += 1
current_end = farthest
return jumps
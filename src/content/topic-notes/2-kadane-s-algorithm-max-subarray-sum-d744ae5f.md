---
id: 2-kadane-s-algorithm-max-subarray-sum-d744ae5f
title: "Pattern 1: 2. Kadane’s Algorithm – Max Subarray Sum"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find the maximum sum of a contiguous subarray.
### Java

```java
public int maxSubArray(int[] nums)
{ int max = nums[0], curr =
nums[0];
for (int i = 1; i < nums.length; i++) {
curr = Math.max(nums[i], curr + nums[i]);
max = Math.max(max, curr);
}
return max;
}
```

### C++

```cpp
int maxSubArray(vector<int>& nums) {
int maxSum = nums[0], curr = nums[0];
for (int i = 1; i < nums.size(); i++) {
curr = max(nums[i], curr + nums[i]);
maxSum = max(maxSum, curr);
}
return maxSum;
}
```

### Python

```python
def maxSubArray(nums):
max_sum = curr = nums[0]
for num in nums[1:]:
curr = max(num, curr + num)
max_sum = max(max_sum, curr)
return max_sum
```
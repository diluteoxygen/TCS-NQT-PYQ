---
id: 8-find-missing-number-arrays-70bfad2d
title: "Pattern 1: 8. Find Missing Number – Arrays"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find the missing number in an array of 1 to N.
### Java

```java
public int missingNumber(int[] nums)
{ int n = nums.length;
int sum = n * (n + 1) / 2;
int arrSum = 0;
for (int num : nums)
{ arrSum += num;
}
return sum - arrSum;
}
```

### C++

```cpp
int missingNumber(vector<int>& nums)
{ int n = nums.size();
int sum = n * (n + 1) / 2;
int arrSum = accumulate(nums.begin(), nums.end(), 0);
return sum - arrSum;
}
```

### Python

```python
def missingNumber(nums):
n = len(nums)
return n * (n + 1) // 2 - sum(nums)
```
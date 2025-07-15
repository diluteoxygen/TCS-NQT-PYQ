---
id: 1-two-sum-arrays-e0368793
title: "Pattern 1: 1. Two Sum – Arrays"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find two indices such that their values sum to a target.
### Java

```java
public int[] twoSum(int[] nums, int target)
{ Map<Integer, Integer> map = new
HashMap<>(); for (int i = 0; i < nums.length;
i++) {
int diff = target - nums[i];
if (map.containsKey(diff)) return new int[]{map.get(diff), i};
map.put(nums[i], i);
}
return new int[0];
}
```

### C++

```cpp
vector<int> twoSum(vector<int>& nums, int target)
{ unordered_map<int, int> map;
for (int i = 0; i < nums.size(); i++)
{ int diff = target - nums[i];
if (map.count(diff)) return {map[diff], i};
map[nums[i]] = i;
}
return {};
}
```

### Python

```python
def twoSum(nums, target):
hashmap = {}
for i, num in enumerate(nums):
diff = target - num
if diff in hashmap:
return [hashmap[diff], i]
hashmap[num] = i
return []
```
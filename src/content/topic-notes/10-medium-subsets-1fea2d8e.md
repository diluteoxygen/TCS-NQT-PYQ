---
id: 10-medium-subsets-1fea2d8e
title: "Pattern 3 (Inferred): 10. Medium: Subsets"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given a set of integers, return all possible subsets (the power set).
### Java

```java
public List<List<Integer>> subsets(int[] nums)
{ List<List<Integer>> result = new
ArrayList<>(); backtrack(nums, 0, new
ArrayList<>(), result); return result;
}
private void backtrack(int[] nums, int start, List<Integer> current,
List<List<Integer>> result) {
result.add(new ArrayList<>(current));
for (int i = start; i < nums.length; i++)
{ current.add(nums[i]);
backtrack(nums, i + 1, current, result);
current.remove(current.size() - 1);
}
}
```

### C++

```cpp
vector<vector<int>> subsets(vector<int>& nums)
{ vector<vector<int>> result;
backtrack(nums, 0, {}, result);
return result;
}
void backtrack(vector<int>& nums, int start, vector<int> current,
vector<vector<int>>& result) {
result.push_back(current);
for (int i = start; i < nums.size(); i++)
{ current.push_back(nums[i]);
backtrack(nums, i + 1, current, result);
current.pop_back();
}
}
```

### Python

```python
def subsets(nums):
result = []
```

backtrack(nums, 0, [], result)
return result

def backtrack(nums, start, current, result):
result.append(list(current))
for i in range(start, len(nums)):
current.append(nums[i])
backtrack(nums, i + 1, current, result)
current.pop()
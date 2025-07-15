---
id: 8-medium-permutations-3dc28432
title: "Pattern 2: 8. Medium: Permutations"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Generate all permutations of a given list of numbers.
### Java

```java
public List<List<Integer>> permute(int[] nums)
{ List<List<Integer>> result = new
ArrayList<>(); backtrack(nums, new
ArrayList<>(), result); return result;
}
private void backtrack(int[] nums, List<Integer> current,
List<List<Integer>> result) {
if (current.size() == nums.length)
{ result.add(new ArrayList<>(current));
return;
}
for (int num : nums) {
if (current.contains(num)) continue;
current.add(num);
backtrack(nums, current, result);
current.remove(current.size() - 1);
}
}
```

### C++

```cpp
vector<vector<int>> permute(vector<int>& nums)
{ vector<vector<int>> result;
backtrack(nums, {}, result);
return result;
}
void backtrack(vector<int>& nums, vector<int> current, vector<vector<int>>&
result) {
if (current.size() == nums.size())
{ result.push_back(current);
return;
}
for (int num : nums) {
if (find(current.begin(), current.end(), num) != current.end())
continue;
```

current.push_back(num);
backtrack(nums, current, result);
current.pop_back();
}
}
### Python

```python
def permute(nums):
result = []
```

backtrack(nums, [], result)
return result
def backtrack(nums, current, result):
if len(current) == len(nums):
result.append(list(current))
return
for num in nums:
if num in current: continue
current.append(num)
backtrack(nums, current, result)
current.pop()
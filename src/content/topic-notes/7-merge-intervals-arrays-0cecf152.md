---
id: 7-merge-intervals-arrays-0cecf152
title: "Pattern 1: 7. Merge Intervals – Arrays"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Merge overlapping intervals.
### Java

```java
public int[][] merge(int[][] intervals) {
Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
List<int[]> result = new ArrayList<>();
for (int[] interval : intervals) {
if (result.isEmpty() || result.get(result.size() - 1)[1] <
interval[0]) {
result.add(interval);
} else {
```

result.get(result.size() - 1)[1] =
Math.max(result.get(result.size() - 1)[1], interval[1]);
}
}
return result.toArray(new int[result.size()][]);
}
### C++

```cpp
vector<vector<int>> merge(vector<vector<int>>& intervals)
{ sort(intervals.begin(), intervals.end());
vector<vector<int>> result;
for (auto& interval : intervals) {
if (result.empty() || result.back()[1] < interval[0])
{ result.push_back(interval);
} else {
result.back()[1] = max(result.back()[1], interval[1]);
}
}
```

return result;
}
### Python

```python
def merge(intervals):
```

intervals.sort(key=lambda x: x[0])
result = []
for interval in intervals:
if not result or result[-1][1] < interval[0]:
result.append(interval)
else:
result[-1][1] = max(result[-1][1], interval[1])
return result
---
id: 4-merge-intervals-a848f729
title: "Pattern 3 (Inferred): 4. Merge Intervals"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given a collection of intervals, merge all overlapping intervals.
### Java

```java
public int[][] merge(int[][] intervals) {
if (intervals.length == 0) return new int[0][0];
Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
List<int[]> merged = new ArrayList<>();
int[] current = intervals[0];
merged.add(current);
for (int[] interval : intervals)
{ if (interval[0] <= current[1])
{
current[1] = Math.max(current[1], interval[1]);
} else {
current = interval;
```

merged.add(current);
}
}
return merged.toArray(new int[merged.size()][]);
}
### C++

```cpp
vector<vector<int>> merge(vector<vector<int>>& intervals)
{ if (intervals.empty()) return {};
sort(intervals.begin(), intervals.end());
vector<vector<int>> merged;
for (auto& interval : intervals) {
if (merged.empty() || merged.back()[1] < interval[0])
{ merged.push_back(interval);
} else {
merged.back()[1] = max(merged.back()[1], interval[1]);
}
}
return merged;
}
```

### Python

```python
def merge(intervals):
if not intervals:
return []
```

intervals.sort(key=lambda x: x[0])
merged = [intervals[0]]
for interval in intervals[1:]:
if merged[-1][1] >= interval[0]:
merged[-1][1] = max(merged[-1][1], interval[1])
else:
merged.append(interval)
return merged
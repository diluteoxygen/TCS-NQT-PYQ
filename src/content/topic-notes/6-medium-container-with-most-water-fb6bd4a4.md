---
id: 6-medium-container-with-most-water-fb6bd4a4
title: "Pattern 2: 6. Medium: Container With Most Water"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given an array of heights, find two lines that together with the x-axis form a
container that holds the most water.

### Java

```java
public int maxArea(int[] height) {
int left = 0, right = height.length - 1;
int maxArea = 0;
while (left < right) {
int width = right - left;
int minHeight = Math.min(height[left], height[right]);
maxArea = Math.max(maxArea, width * minHeight);
if (height[left] < height[right])
{ left++;
} else {
right--;
}
}
return maxArea;
}
```

### C++

```cpp
int maxArea(vector<int>& height) {
int left = 0, right = height.size() - 1;
int maxArea = 0;
while (left < right) {
int width = right - left;
int minHeight = min(height[left], height[right]);
maxArea = max(maxArea, width * minHeight);
if (height[left] < height[right])
{ left++;
} else {
right--;
}
}
return maxArea;
}
```

### Python

```python
def maxArea(height):
```

left, right = 0, len(height) - 1
max_area = 0
while left < right:
width = right - left
min_height = min(height[left], height[right])
max_area = max(max_area, width * min_height)
if height[left] < height[right]:
left += 1
else:
right -= 1
return max_area
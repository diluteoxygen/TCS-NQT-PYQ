---
id: 2-easy-merge-sorted-array-96512e41
title: "Pattern 2: 2. Easy: Merge Sorted Array"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Merge two sorted arrays into one sorted array.
### Java

```java
public void merge(int[] nums1, int m, int[] nums2, int n)
{ int i = m - 1, j = n - 1, k = m + n - 1;
```

while (i >= 0 && j >= 0) {

if (nums1[i] > nums2[j]) {
nums1[k--] = nums1[i--];
} else {
nums1[k--] = nums2[j--];
}
}
while (j >= 0) {
nums1[k--] = nums2[j--];
}
}
### C++

```cpp
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n)
{ int i = m - 1, j = n - 1, k = m + n - 1;
while (i >= 0 && j >= 0) {
if (nums1[i] > nums2[j]) {
nums1[k--] = nums1[i--];
} else {
nums1[k--] = nums2[j--];
}
}
while (j >= 0) {
nums1[k--] = nums2[j--];
}
}
```

### Python

```python
def merge(nums1, m, nums2, n):
```

i, j, k = m - 1, n - 1, m + n - 1
while i >= 0 and j >= 0:
if nums1[i] > nums2[j]:
nums1[k] = nums1[i]
i -= 1
else:
nums1[k] = nums2[j]
j -= 1
k -= 1
while j >= 0:
nums1[k] = nums2[j]
j -= 1
k -= 1
---
id: 1-easy-find-the-duplicate-number-88dbb874
title: "Pattern 2: 1. Easy: Find the Duplicate Number"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find the duplicate number in an array containing n + 1 integers where each
integer is between 1 and n.
### Java

```java
public int findDuplicate(int[] nums)
{ int slow = nums[0], fast = nums[0];
do {
```

slow = nums[slow];
fast = nums[nums[fast]];
} while (slow != fast);
fast = nums[0];
while (slow != fast)
{ slow =
nums[slow]; fast =
nums[fast];
}
return slow;
}
### C++

```cpp
int findDuplicate(vector<int>& nums)
{ int slow = nums[0], fast = nums[0];
do {
slow = nums[slow];
fast = nums[nums[fast]];
} while (slow != fast);
fast = nums[0];
while (slow != fast)
{ slow =
nums[slow]; fast =
nums[fast];
}
return slow;
}
```

### Python

```python
def findDuplicate(nums):
slow = fast = nums[0]
while True:
slow = nums[slow]
fast = nums[nums[fast]]
if slow == fast:
```

break
fast = nums[0]
while slow != fast:
slow = nums[slow]
fast = nums[fast]
return slow
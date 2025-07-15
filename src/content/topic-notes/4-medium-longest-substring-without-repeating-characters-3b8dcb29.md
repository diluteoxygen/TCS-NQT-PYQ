---
id: 4-medium-longest-substring-without-repeating-characters-3b8dcb29
title: "Pattern 2: 4. Medium: Longest Substring Without Repeating Characters"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find the length of the longest substring without repeating characters.
### Java

```java
public int lengthOfLongestSubstring(String s)
{ Set<Character> set = new HashSet<>();
int left = 0, maxLength = 0;
for (int right = 0; right < s.length(); right++)
{ while (set.contains(s.charAt(right))) {
set.remove(s.charAt(left));
```

left++;
}
set.add(s.charAt(right));
maxLength = Math.max(maxLength, right - left + 1);
}
return maxLength;
}
C++:
cpp
int lengthOfLongestSubstring(string s)
{ unordered_set<char> set;
int left = 0, maxLength = 0;
for (int right = 0; right < s.size(); right++)
{ while (set.count(s[right])) {
set.erase(s[left]);
left++;
}
set.insert(s[right]);
maxLength = max(maxLength, right - left + 1);
}
return maxLength;
}
### Python

```python
def lengthOfLongestSubstring(s):
char_set = set()
```

left, max_len = 0, 0
for right in range(len(s)):
while s[right] in char_set:
char_set.remove(s[left])
left += 1
char_set.add(s[right])
max_len = max(max_len, right - left + 1)
return max_len
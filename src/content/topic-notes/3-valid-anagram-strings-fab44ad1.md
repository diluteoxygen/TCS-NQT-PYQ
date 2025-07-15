---
id: 3-valid-anagram-strings-fab44ad1
title: "Pattern 1: 3. Valid Anagram – Strings"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Check if two strings are anagrams.
### Java

```java
public boolean isAnagram(String s, String t)
{ if (s.length() != t.length()) return
false; int[] count = new int[26];
for (char c : s.toCharArray()) count[c - 'a']++;
for (char c : t.toCharArray()) if (--count[c - 'a'] < 0) return false;
return true;
```

}
### C++

```cpp
bool isAnagram(string s, string t) {
if (s.size() != t.size()) return false;
vector<int> count(26, 0);
for (char c : s) count[c - 'a']++;
for (char c : t) if (--count[c - 'a'] < 0) return false;
return true;
}
```

### Python

```python
def isAnagram(s, t):
return sorted(s) == sorted(t)
```
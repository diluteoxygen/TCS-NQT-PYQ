---
id: 4-longest-palindromic-substring-strings-4235d9bb
title: "Pattern 1: 4. Longest Palindromic Substring – Strings"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find the longest palindromic substring in a given string.
### Java

```java
public String longestPalindrome(String s)
{ int start = 0, maxLen = 0;
for (int i = 0; i < s.length(); i++) {
int len1 = expand(s, i, i), len2 = expand(s, i, i + 1);
int len = Math.max(len1, len2);
if (len > maxLen)
{ maxLen = len;
start = i - (len - 1) / 2;
}
}
return s.substring(start, start + maxLen);
}
private int expand(String s, int l, int r) {
while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r))
{ l--; r++;
}
return r - l - 1;
}
```

C++:
cpp
string longestPalindrome(string s)
{ int start = 0, maxLen = 0;
for (int i = 0; i < s.size(); i++) {
int len1 = expand(s, i, i), len2 = expand(s, i, i + 1);

int len = max(len1, len2);
if (len > maxLen) {
maxLen = len;
start = i - (len - 1) / 2;
}
}
return s.substr(start, maxLen);
}
int expand(string s, int l, int r) {
while (l >= 0 && r < s.size() && s[l] == s[r]) { l--; r++; }
return r - l - 1;
}
### Python

```python
def longestPalindrome(s):
start = max_len = 0
for i in range(len(s)):
for l, r in [(i, i), (i, i+1)]:
while l >= 0 and r < len(s) and s[l] == s[r]:
```

l -= 1
r += 1
if r - l - 1 > max_len:
start = l + 1
max_len = r - l - 1
return s[start:start + max_len]
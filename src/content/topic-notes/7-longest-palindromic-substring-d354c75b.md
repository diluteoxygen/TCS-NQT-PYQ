---
id: 7-longest-palindromic-substring-d354c75b
title: "Pattern 3 (Inferred): 7. Longest Palindromic Substring"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given a string s, return the longest palindromic substring in s.
### Java

```java
public String longestPalindrome(String s) {
if (s == null || s.length() == 0) return "";
int start = 0, maxLength = 1;
for (int i = 0; i < s.length(); i++) {
int len1 = expandAroundCenter(s, i, i);
int len2 = expandAroundCenter(s, i, i + 1);
int len = Math.max(len1, len2);
if (len > maxLength)
{ maxLength = len;
start = i - (maxLength - 1) / 2;
}
}
return s.substring(start, start + maxLength);
}
private int expandAroundCenter(String s, int left, int right) {
```

while (left >= 0 && right < s.length() && s.charAt(left) ==
s.charAt(right)) {
left--;
right++;
}
return right - left - 1;
}
C++:
cpp
string longestPalindrome(string s)
{ int start = 0, maxLength = 1;
for (int i = 0; i < s.size(); i++) {
int len1 = expandAroundCenter(s, i, i);
int len2 = expandAroundCenter(s, i, i + 1);
int len = max(len1, len2);
if (len > maxLength)
{ maxLength = len;
start = i - (maxLength - 1) / 2;
}
}
return s.substr(start, maxLength);
}
int expandAroundCenter(string s, int left, int right) {
while (left >= 0 && right < s.size() && s[left] == s[right])
{ left--;
right++;
}
return right - left - 1;
}
### Python

```python
def longestPalindrome(s):
def expandAroundCenter(s, left, right):
while left >= 0 and right < len(s) and s[left] == s[right]:
```

left -= 1
right += 1
return right - left - 1
start, maxLength = 0, 1
for i in range(len(s)):
len1 = expandAroundCenter(s, i, i)
len2 = expandAroundCenter(s, i, i + 1)
length = max(len1, len2)
if length > maxLength:
maxLength = length
start = i - (maxLength - 1) // 2
return s[start:start + maxLength]
---
id: 9-decode-ways-3a8569c8
title: "Pattern 3 (Inferred): 9. Decode Ways"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: A message containing letters from A-Z can be encoded into numbers using the
following mapping:

 'A' -> "1", 'B' -> "2", ..., 'Z' -> "26".
Given a string s consisting of digits, determine the total number of ways to decode it.
### Java

```java
public int numDecodings(String s) {
if (s == null || s.length() == 0) return 0;
int prev = 1, curr = s.charAt(0) == '0' ? 0 : 1;
for (int i = 1; i < s.length(); i++) {
int temp = curr;
if (s.charAt(i) == '0')
{ curr = 0;
}
if (s.charAt(i - 1) == '1' || (s.charAt(i - 1) == '2' &&
s.charAt(i) <= '6')) {
curr += prev;
}
prev = temp;
}
return curr;
}
```

### C++

```cpp
int numDecodings(string s) {
if (s.empty() || s[0] == '0') return 0;
int prev = 1, curr = 1;
for (int i = 1; i < s.size(); i++)
{ int temp = curr;
if (s[i] == '0') curr = 0;
if (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6')) curr +=
prev;
}
prev = temp;
return curr;
}
```

### Python

```python
def numDecodings(s):
if not s or s[0] == '0': return 0
```

prev, curr = 1, 1
for i in range(1, len(s)):
temp = curr
if s[i] == '0': curr = 0
if s[i - 1] == '1' or (s[i - 1] == '2' and s[i] <= '6'):
curr += prev
prev = temp
return curr
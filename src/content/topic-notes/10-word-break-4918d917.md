---
id: 10-word-break-4918d917
title: "Pattern 3 (Inferred): 10. Word Break"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given a non-empty string s and a dictionary of words wordDict, determine if s
can be segmented into a space-separated sequence of one or more dictionary words.
### Java

```java
public boolean wordBreak(String s, List<String> wordDict)
{ Set<String> wordSet = new HashSet<>(wordDict);
boolean[] dp = new boolean[s.length() + 1];
dp[0] = true;
for (int i = 1; i <= s.length(); i++)
{ for (int j = 0; j < i; j++) {
if (dp[j] && wordSet.contains(s.substring(j, i)))
{ dp[i] = true;
break;
}
}
}
return dp[s.length()];
}
```

### C++

```cpp
bool wordBreak(string s, vector<string>& wordDict)
{ unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
vector<bool> dp(s.size() + 1, false);
dp[0] = true;
for (int i = 1; i <= s.size(); i++)
{ for (int j = 0; j < i; j++) {
if (dp[j] && wordSet.count(s.substr(j, i - j)))
{ dp[i] = true;
break;
}
}
}
return dp[s.size()];
}
```

### Python

```python
def wordBreak(s, wordDict):
wordSet = set(wordDict)
dp = [False] * (len(s) + 1)
dp[0] = True
for i in range(1, len(s) + 1):
for j in range(i):
if dp[j] and s[j:i] in wordSet:
dp[i] = True
```

break
return dp[len(s)]
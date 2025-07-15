---
id: 9-word-search-backtracking-903b8d71
title: "Pattern 1: 9. Word Search – Backtracking"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find if a word exists in a 2D grid of characters.
### Java

```java
public boolean exist(char[][] board, String word)
{ for (int i = 0; i < board.length; i++) {
for (int j = 0; j < board[0].length; j++) {
if (backtrack(board, word, i, j, 0)) return true;
}
}
return false;
}
private boolean backtrack(char[][] board, String word, int i, int j, int
index) {
if (index == word.length()) return true;
if (i < 0 || j < 0 || i >= board.length || j >= board[0].length ||
board[i][j] != word.charAt(index)) return false;
char temp = board[i][j];
board[i][j] = '#'; // mark as visited
```

boolean found = backtrack(board, word, i+1, j, index+1) ||
backtrack(board, word, i-1, j, index+1) ||
backtrack(board, word, i, j+1, index+1) ||
backtrack(board, word, i, j-1, index+1);
board[i][j] = temp; // restore
return found;
}
### C++

```cpp
bool exist(vector<vector<char>>& board, string word)
{ for (int i = 0; i < board.size(); i++) {
for (int j = 0; j < board[0].size(); j++) {
if (backtrack(board, word, i, j, 0)) return true;
}
}
return false;
}
bool backtrack(vector<vector<char>>& board, string word, int i, int j, int
index) {
if (index == word.length()) return true;
if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size() ||
board[i][j] != word[index]) return false;
char temp = board[i][j];
board[i][j] = '#';
```

bool found = backtrack(board, word, i+1, j, index+1) ||
backtrack(board, word, i-1, j, index+1) ||

backtrack(board, word, i, j+1, index+1) ||
backtrack(board, word, i, j-1, index+1);
board[i][j] = temp;
return found;
}
### Python

```python
def exist(board, word):
for i in range(len(board)):
for j in range(len(board[0])):
if backtrack(board, word, i, j, 0):
return True
return False
def backtrack(board, word, i, j, index):
if index == len(word):
return True
if i < 0 or j < 0 or i >= len(board) or j >= len(board[0]) or
```

board[i][j] != word[index]:
return False
temp = board[i][j]
board[i][j] = '#' # mark as visited
found = (backtrack(board, word, i + 1, j, index + 1) or
backtrack(board, word, i - 1, j, index + 1) or
backtrack(board, word, i, j + 1, index + 1) or
backtrack(board, word, i, j - 1, index + 1))
board[i][j] = temp # restore
return found
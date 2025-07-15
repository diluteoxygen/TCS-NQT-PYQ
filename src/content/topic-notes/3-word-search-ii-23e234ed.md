---
id: 3-word-search-ii-23e234ed
title: "Pattern 3 (Inferred): 3. Word Search II"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given a 2D board and a list of words, find all words in the board.
### Java

```java
public List<String> findWords(char[][] board, String[] words)
{ Set<String> result = new HashSet<>();
TrieNode root = buildTrie(words);
boolean[][] visited = new boolean[board.length][board[0].length];
for (int i = 0; i < board.length; i++) {
for (int j = 0; j < board[0].length; j++)
{ dfs(board, i, j, root, visited, result);
}
}
return new ArrayList<>(result);
}
private void dfs(char[][] board, int i, int j, TrieNode node, boolean[][]
visited, Set<String> result) {
if (i < 0 || j < 0 || i >= board.length || j >= board[0].length ||
visited[i][j] || node.children[board[i][j] - 'a'] == null) return;
visited[i][j] = true;
node = node.children[board[i][j] - 'a'];
if (node.word != null) {
result.add(node.word);
}
dfs(board, i + 1, j, node, visited, result);
dfs(board, i - 1, j, node, visited, result);
dfs(board, i, j + 1, node, visited, result);
dfs(board, i, j - 1, node, visited, result);
visited[i][j] = false;
}
private TrieNode buildTrie(String[] words)
{ TrieNode root = new TrieNode();
for (String word : words)
{ TrieNode node = root;
for (char c : word.toCharArray()) {
```

if (node.children[c - 'a'] == null)
{ node.children[c - 'a'] = new TrieNode();
}
node = node.children[c - 'a'];
}
node.word = word;
}
return root;
}
class TrieNode {
TrieNode[] children = new TrieNode[26];
String word = null;
}
### C++

```cpp
class TrieNode
{ public:
TrieNode* children[26] = {};
string word;
};
vector<string> findWords(vector<vector<char>>& board, vector<string>&
words) {
set<string> result;
TrieNode* root = buildTrie(words);
vector<vector<bool>> visited(board.size(),
vector<bool>(board[0].size(), false));
for (int i = 0; i < board.size(); i++) {
for (int j = 0; j < board[0].size(); j++)
{ dfs(board, i, j, root, visited, result);
}
}
return vector<string>(result.begin(), result.end());
}
void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node,
vector<vector<bool>>& visited, set<string>& result) {
if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size() ||
visited[i][j] || !node->children[board[i][j] - 'a']) return;
visited[i][j] = true;
node = node->children[board[i][j] - 'a'];
if (!node->word.empty()) {
result.insert(node->word);
}
dfs(board, i + 1, j, node, visited, result);
dfs(board, i - 1, j, node, visited, result);
dfs(board, i, j + 1, node, visited, result);
dfs(board, i, j - 1, node, visited, result);
visited[i][j] = false;
}
```

TrieNode* buildTrie(vector<string>& words)
{ TrieNode* root = new TrieNode();
for (string word : words)
{ TrieNode* node = root;
for (char c : word) {
if (!node->children[c - 'a']) {
node->children[c - 'a'] = new TrieNode();
}
node = node->children[c - 'a'];
}
node->word = word;
}
return root;
}
### Python

```python
def findWords(board, words):
result = set()
trie = buildTrie(words)
visited = [[False] * len(board[0]) for _ in range(len(board))]
for i in range(len(board)):
for j in range(len(board[0])):
```

dfs(board, i, j, trie, visited, result)
return list(result)
def dfs(board, i, j, node, visited, result):
if i < 0 or j < 0 or i >= len(board) or j >= len(board[0]) or
visited[i][j]: return
char = board[i][j]
if char not in node: return
visited[i][j] = True
node = node[char]
if 'word' in node:
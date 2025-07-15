---
id: 9-hard-word-search-ii-7cff0be6
title: "Pattern 2: 9. Hard: Word Search II"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Find all words in a 2D board of letters using a dictionary.
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
visited[i][j]) return;
char c = board[i][j];
if (!node.children.containsKey(c)) return;
visited[i][j] = true;
node = node.children.get(c);
if (node.word != null) result.add(node.word);
dfs(board, i + 1, j, node, visited, result);
dfs(board, i - 1, j, node, visited, result);
dfs(board, i, j + 1, node, visited, result);
```

dfs(board, i, j - 1, node, visited, result);
visited[i][j] = false;
}
private TrieNode buildTrie(String[] words)
{ TrieNode root = new TrieNode();
for (String word : words)
{ TrieNode node = root;
for (char c : word.toCharArray()) {
node = node.children.computeIfAbsent(c, k -> new TrieNode());
}
node.word = word;
}
return root;
}
class TrieNode {
Map<Character, TrieNode> children = new HashMap<>();
String word;
}
### C++

```cpp
vector<string> findWords(vector<vector<char>>& board, vector<string>&
words) {
unordered_set<string> result;
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
vector<vector<bool>>& visited, unordered_set<string>& result) {
if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size() ||
visited[i][j]) return;
char c = board[i][j];
if (node->children.find(c) == node->children.end()) return;
visited[i][j] = true;
node = node->children[c];
if (!node->word.empty()) result.insert(node->word);
dfs(board, i + 1, j, node, visited, result);
dfs(board, i - 1, j, node, visited, result);
dfs(board, i, j + 1, node, visited, result);
dfs(board, i, j - 1, node, visited, result);
visited[i][j] = false;
}
TrieNode* buildTrie(vector<string>& words)
{ TrieNode* root = new TrieNode();
for (auto& word : words)
{ TrieNode* node =
root; for (char c :
word) {
```

if (node->children
---
id: 5-hard-n-queens-db31427c
title: "Pattern 2: 5. Hard: N-Queens"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Solve the N-Queens puzzle by returning all distinct solutions.
### Java

```java
public List<List<String>> solveNQueens(int n)
{ List<List<String>> result = new ArrayList<>();
solve(n, 0, new int[n], result);
return result;
}
private void solve(int n, int row, int[] cols, List<List<String>> result)
{ if (row == n) {
```

List<String> board = new ArrayList<>();
for (int i = 0; i < n; i++) {
char[] rowArr = new char[n];
Arrays.fill(rowArr, '.');
rowArr[cols[i]] = 'Q';
board.add(new String(rowArr));
}
result.add(board);
return;
}
for (int col = 0; col < n; col++)
{ if (isValid(row, col, cols)) {
cols[row] = col;
solve(n, row + 1, cols, result);
}
}
}
private boolean isValid(int row, int col, int[] cols)
{ for (int i = 0; i < row; i++) {
if (cols[i] == col || Math.abs(cols[i] - col) == row - i)
{ return false;
}
}
return true;
}
### C++

```cpp
vector<vector<string>> solveNQueens(int n)
{ vector<vector<string>> result;
vector<int> cols(n);
solve(n, 0, cols, result);
return result;
}
void solve(int n, int row, vector<int>& cols, vector<vector<string>>&
result) {
if (row == n) {
vector<string> board(n, string(n, '.'));
for (int i = 0; i < n; i++) {
board[i][cols[i]] = 'Q';
}
result.push_back(board);
return;
}
for (int col = 0
```
---
id: 2-set-matrix-zeroes-99b3d969
title: "Pattern 3 (Inferred): 2. Set Matrix Zeroes"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Given an m x n matrix, if an element is 0, set its entire row and column to 0.
### Java

```java
public void setZeroes(int[][] matrix)
{ boolean rowZero = false, colZero = false;
for (int i = 0; i < matrix.length; i++) {
if (matrix[i][0] == 0)
{ rowZero = true;
break;
}
}
for (int j = 0; j < matrix[0].length; j++)
{ if (matrix[0][j] == 0) {
colZero = true;
break;
}
}
for (int i = 1; i < matrix.length; i++) {
for (int j = 1; j < matrix[0].length; j++)
{ if (matrix[i][j] == 0) {
matrix[i][0] = 0;
matrix[0][j] = 0;
}
}
}
for (int i = 1; i < matrix.length; i++) {
for (int j = 1; j < matrix[0].length; j++) {
if (matrix[i][0] == 0 || matrix[0][j] == 0)
{ matrix[i][j] = 0;
}
}
}
if (rowZero) {
for (int i = 0; i < matrix.length; i++)
{ matrix[i][0] = 0;
}
}
if (colZero) {
for (int j = 0; j < matrix[0].length; j++)
{ matrix[0][j] = 0;
}
}
}
```

### C++

```cpp
void setZeroes(vector<vector<int>>& matrix)
{ bool rowZero = false, colZero = false;
for (int i = 0; i < matrix.size(); i++) {
if (matrix[i][0] == 0)
{ rowZero = true;
break;
}
}
for (int j = 0; j < matrix[0].size(); j++)
{ if (matrix[0][j] == 0) {
colZero = true;
break;
}
}
for (int i = 1; i < matrix.size(); i++) {
for (int j = 1; j < matrix[0].size(); j++)
{ if (matrix[i][j] == 0) {
matrix[i][0] = 0;
matrix[0][j] = 0;
}
}
}
for (int i = 1; i < matrix.size(); i++) {
for (int j = 1; j < matrix[0].size(); j++) {
if (matrix[i][0] == 0 || matrix[0][j] == 0)
{ matrix[i][j] = 0;
}
}
}
if (rowZero) {
for (int i = 0; i < matrix.size(); i++)
{ matrix[i][0] = 0;
}
}
if (colZero) {
for (int j = 0; j < matrix[0].size(); j++)
{ matrix[0][j] = 0;
}
}
}
```

### Python

```python
def setZeroes(matrix):
row_zero = any(matrix[i][0] == 0 for i in range(len(matrix)))
col_zero = any(matrix[0][j] == 0 for j in range(len(matrix[0])))
for i in range(1, len(matrix)):
for j in range(1, len(matrix[0])):
if matrix[i][j] == 0:
matrix[i][0] = 0
matrix[0][j] = 0
for i in range(1, len(matrix)):
```

for j in range(1, len(matrix[0])):
if matrix[i][0] == 0 or matrix[0][j] == 0:
matrix[i][j] = 0
if row_zero:
for i in range(len(matrix)):
matrix[i][0] = 0
if col_zero:
for j in range(len(matrix[0])):
matrix[0][j] = 0
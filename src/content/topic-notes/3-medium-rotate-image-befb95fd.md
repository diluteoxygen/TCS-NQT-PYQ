---
id: 3-medium-rotate-image-befb95fd
title: "Pattern 2: 3. Medium: Rotate Image"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Rotate a given n x n 2D matrix by 90 degrees (clockwise).
### Java

```java
public void rotate(int[][] matrix) {
```

int n = matrix.length;
for (int i = 0; i < n / 2; i++) {
for (int j = i; j < n - i - 1; j++)
{ int temp = matrix[i][j];
matrix[i][j] = matrix[n - j - 1][i];
matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
matrix[j][n - i - 1] = temp;
}
}
}
### C++

```cpp
void rotate(vector<vector<int>>& matrix)
{ int n = matrix.size();
for (int i = 0; i < n / 2; i++) {
for (int j = i; j < n - i - 1; j++)
{ int temp = matrix[i][j];
matrix[i][j] = matrix[n - j - 1][i];
matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
matrix[j][n - i - 1] = temp;
}
}
}
```

### Python

```python
def rotate(matrix):
n = len(matrix)
for i in range(n // 2):
for j in range(i, n - i - 1):
temp = matrix[i][j]
matrix[i][j] = matrix[n - j - 1][i]
```

matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
matrix[j][n - i - 1] = temp
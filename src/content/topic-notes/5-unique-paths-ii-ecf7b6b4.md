---
id: 5-unique-paths-ii-ecf7b6b4
title: "Pattern 3 (Inferred): 5. Unique Paths II"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: A robot is located at the top-left corner of a m x n grid, it can only move down
or right, and some cells are blocked. Find how many unique paths the robot can take.
### Java

```java
public int uniquePathsWithObstacles(int[][] obstacleGrid)
{ int m = obstacleGrid.length;
int n = obstacleGrid[0].length;
int[] dp = new int[n];
dp[0] = obstacleGrid[0][0] == 1 ? 0 : 1;
for (int i = 0; i < m; i++) {
for (int j = 0; j < n; j++) {
if (obstacleGrid[i][j] == 1) dp[j] = 0;
```

else if (j > 0) dp[j] += dp[j - 1];
}
}
return dp[n - 1];
}
### C++

```cpp
int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid)
{ int m = obstacleGrid.size();
int n = obstacleGrid[0].size();
vector<int> dp(n, 0);
dp[0] = obstacleGrid[0][0] == 1 ? 0 : 1;
for (int i = 0; i < m; i++) {
for (int j = 0; j < n; j++) {
if (obstacleGrid[i][j] == 1) dp[j] = 0;
else if (j > 0) dp[j] += dp[j - 1];
}
}
return dp[n - 1];
}
```

### Python

```python
def uniquePathsWithObstacles(grid):
```

m, n = len(grid), len(grid[0])
dp = [0] * n
dp[0] = 1 if grid[0][0] == 0 else 0
for i in range(m):
for j in range(n):
if grid[i][j] == 1:
dp[j] = 0
elif j > 0:
dp[j] += dp[j - 1]
return dp[-1]
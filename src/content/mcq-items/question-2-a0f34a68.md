---
id: question-2-a0f34a68
paper: paper-08
section: Coding
questionNumber: 2
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

Mahesh and Suresh are playing a new game “Checkers“. This is a very simple game
But becomes challenging when more expert players are playing.
Below is the description of the game and rules: The game is played by 2 players.
This game consists of an N*M matrix. Each of the cells is background lit by lights.
And these cells are either Green or Black. The green and black cells are randomly lit

And will be represented with 1’s and 0’s respectively. Green cells are the cells that needs to be captured.
Black cells cannot be captured Everyone is in the race to capture the maximum number of cells possible. In a single chance, a player can capture all those adjacent cells which share an edge. Once there is no adjacent edge the chance breaks and the next player will play. Mahesh always starts the game and Suresh is second. Both players are playing optimally, find out how many cells Suresh captures. Input: • N and M, size of matrix A[i][j] for all 1<=i<=N and 1<=j<=M Let us try to understand it with an example Consider the matrix below N = 4 M = 4 A= 1001 0110 0110 1001 If Mahesh plays first, he will try to capture most of the 1’s, he will capture A[2][2], A[2][3], A[3][2] and A[3][3]. Now there is no adjacent cells left. So, the chance will be given to Suresh. Now Suresh’s turn. He can capture either of A[1][1] or A[4][1] or A[4][7] or A[4][4]. He will capture any one cell, and as there is no adjacent deft, the chance will now be given to Mahesh. The game proceeds and then again Suresh’s turn will come, and he will again be able to choose only 1 cell and finally Mahesh will end the game by choosing the final cell. Like this Mahesh has captured 6 cells and Suresh has captured only 2 cells. Hence 2 is the answer. Example 1: • Input: 2 2 -> Input integer, N, M 1 1 -> Input integer, A[i] 1 1 -> Input integer, A[N] • Output: 0 -> Output • Explanation: In the above scenario, it is very clear that if Mahesh plays first, he will capture all the cells As all the cells are adjacent to each other. There will be nothing left for Suresh. Hence the cells captured by Suresh will be 0. Hence the answer is 0. Example 2: • Input: 4 4 -> Input integer, N, M 1001 -> Input integer, A[i] 0110 -> Input integer, A[i+1] 0110 -> Input integer, A[i+2] 1001 -> Input integer, A[N] • Output: 2 -> Output • Explanation: If Mahesh plays first, he will try to cover most of the 1’s, he will cover A[2][2], A[2][3], A[3][2] and A[3][3]. Now there is no adjacent cells left. So, the chance will be given to Suresh. Now Suresh’s turn. He can capture either of A[1][1] or A[4][1] or A[4][1] or A[4][4]. He will capture any one cell, and as there is no adjacent left, the chance will now be given to Mahesh. The game proceeds and then again Suresh’s turn will come, and he will again be able to choose only 1 cell, and finally Mahesh will end the game by choosing the final cell. Like this Mahesh has captured 6 cells and Suresh has captured only 2 cells. Hence 2 is the answer. Python Def getMaxVol(money, price, volume, n): K = [] for i in range(n + 1): temp = [] for j in range(money + 1): temp.append(0) K.append(temp) for i in range(n + 1): for m in range(money + 1): if i == 0 or m == 0: K[i][m] = 0 elif price[i - 1] <= m: K[i][m] = max(volume[i - 1] + K[i - 1][m - price[i - 1]], K[i - 1][m]) else: K[i][m] = K[i - 1][m] return K[n][money] N, money = map(int, input().split()) price = list(map(int, input().split())) volume = list(map(int, input().split())) print(getMaxVol(money, price, volume, len(volume))) Advanced Quantitative
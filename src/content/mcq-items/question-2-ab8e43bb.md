---
id: question-2-ab8e43bb
paper: paper-10
section: Advanced Coding
questionNumber: 2
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

You have a storeroom in your house. The storeroom is a square type and has sides of
length N.
Your mom has divided the room into a 2-dimensional matrix M.
In each cell of that matrix, there is a box and has weight Wij (for all i<=N and j<=N).

As you are a mathematician, you are very much interested in the median concept. So,
your mom gave you a task to test your intelligence.
You have to find the minimum of all row medians (weights) as maximum possible by
rearranging the 2 dimensional matrix M. But you have a limit.
You are accepted to rearrange if and only if the sum of median weights of N rows
should not exceed tolerance if it is not possible to rearrange the matrix M for a
minimum of 1 time, then print -1,
NOTE: Here we considered the array as 1-indexed and median is calculated by the
formula = (N+1)/2
Example – 1:

• Input:
4 198 -> N and P values
34 77 72 65 -> 1st row of length 4
49 70 71 15 -> 2nd row of length 4
12 84 5 78 -> 3rd row of length 4
74 1 26 60 -> 4th row of length 4
• Output:
26
• Explanation:
Here we can rearrange the 2-d matrix as k > sum of all row medians. But how many
possible re-arrangements we do we will get the same minimum median of all rows is 26.

Example – 2:
• Input:
5 653
38 43 5 26 35
39 62 6 93 66
80 35 51 28 22
82 31 37 50 88
92 96 5 96 49

Output:
38

Advanced Quantitative
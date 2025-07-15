---
id: question-1-543690f3
paper: paper-09
section: Advanced Coding
questionNumber: 1
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

Joe was reading an interesting novel when all of a sudden, his 5 year old son came to
him and started asking few questions about functions.

He tried making him understand various functions, but his son didn’t get find it
interesting.

Then he created his function Absent number function A(S)

According to this function, there is always the smallest positive integer number in a
sequence that is not available.
In simple words,if you sort the given sequence ,then the smallest integer number
(other than 0) which is not present in the sequence is the Absent number.
Consider a sequence S= [1, 2, 3], then B(S)=4.

The minimum value greater than 0 which is not present here is in the sequence is 4.
Now his son found it interesting ,so Joe extended this logic to sub-sequence.
If there is a given sequence S, you have to find the Absent Number for each sub-
sequence and then sum it up.
if the answer is large, print the result modulo, 109 +7.

Let say there exist a sequence with N = 3, and sequence S = [1, 2, 1]
Below are the various sub-sequences of it,
Basically it will be 2N:

[ ] : B([ ]) = 1
[1] : B([1]) = 2
[2] : B([2]) = 1
[1] : B([1]) = 2
[1, 2] : B([1, 2]) = 3
[2, 1] : B([2, 1]) = 3
[1, 1] : B([1, 1]) = 2
[1, 2, 1] : B([1, 2, 1]) = 3

Total sum of all B(S) = 1+2+1+2+3+3+2+3 = 17.
Hence the answer is 17.
Example 1:
• Input:
2 -> input Integer ,N
1 1 -> input Integer,S
• Output:
7 -> Output
• Explanation:
In the above scenario below are the various sub-sequence and respective function of it: [
] : B(l) = 1
[1]: B([1])= 2
[1]: B([1]) = 2
[1,1]: B([1,1]) = 2
Total sum of all B(S) = 1+2+2+2 = 7 Hence the answer is 7.

Example 2:
• Input:
3 -> Input integer, N
1 2 1 -> Input integer, S
• Output:
17->Output
• Explanation:
In the above scenario below are the various sub-sequences and respective function of it. [
] : B([ ]) = 1
[1] : B([1]) = 2
[2] : B([2]) =1
[1] : B([1]) = 2
[1, 2] : B([1, 2]) = 3
[2, 1] : B([2, 1]) = 3
[1, 1] : B([1, 1]) = 2
[1, 2, 1] : B([1, 2, 1]) = 3

Total sum of all B(S) = 1 + 2 + 1 + 2 + 3 + 3 + 2 + 3 = 17.
Hence the answer is 17.

Python
from itertools import combinations

Def fun(n, s):
ans = 1

Comb = []
for i in range(n):
Comb += combinations(s, i + 1)

for i in comb:
A= minMis(list(i))
ans += a

return ans

Def minMis(arr):
for i in range(len(arr)):
if i + 1 not in arr:
return i + 1
return len(arr) + 1
n = int(input())
s = list(map(int, input().split()))
print(fun(n, s))
---
id: question-1-44cace0b
paper: paper-04
section: Advanced Coding
questionNumber: 1
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

You are given an array A of size N. Your friend gave an amazıng task for you.

Your friend likes one type of Sequence. So, he called that type of sequence a fair
sequence.
You should select a fair sequence of maximum length from an array.

Here a fair sequence is nothing but you have to select elements in a pattern like
positive element, negative element, positive element… (negative element, positive
element, negative element, to form sequence
Your task is to print the maximum sum of elements possible by selecting a fair
subsequence with maximum length.
Ex: If art A = [-1, 18, 13, 18, 2, 16-1, -213, 11]. Here your minimum length can be which
subsequences -7 -2, 7,-1, 11. Sum is 27,-1, is the maximums Your friend also kept a
timer of 15 min. If you solve
Your task is to print the maximum sum of elements possible by selecting a fair
subsequence with maximum length.
Ex: If array A = [-1, 18, 13, 18, 2, 16-1, -213, 11]. Here your minimum length can be 6.
The fair subsequence is -1, -18,-7, -2, 7,-1, 11. The Sum is 32 which is the maximum
possible.
Your friend also kept a timer of 15 min. You will win, will you be able to do it?
NOTE: You should select the elements in a fair sequence only.
Example – 1:
• Input:
5 – N ( Number of elements in an array )
21 12 13 -21 -2 – Array A consists of N elements
• Output:
19
• Explanation:
Here you can select 21, -2 subsequences of maximum length 2. The sum is 19 which is
the maximum possible for a fair subsequence of length 2.

Example – 2:
• Input:
-153 -689
• Output:
-153

Explanation:
Here you can select 21, -2 subsequences of maximum length 2. The sum is 19 which
is the maximum possible for a fair subsequence of length 2.
Python
Def fun(arr, n):
ans = []

t = 1
if arr[0] > 0:
t = 0
i = 0
while i < n:
if t == 0:
j = i
while j < n:
if arr[j] > 0:
j += 1
else:
Break
ans.append(max(arr[i:j]))

i = j
t = 1
else:
j = i
while j < n:
if arr[j] < 0:
j += 1
else:
Break
ans.append(max(arr[i:j]))

i = j
t = 0
return sum(ans)

n = int(input())
Ar = list(map(int, input().split()))
print(fun(ar, n))
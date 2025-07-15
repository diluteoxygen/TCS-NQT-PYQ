---
id: question-1-3486eadc
paper: paper-03
section: Advanced Coding
questionNumber: 1
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

This vacation you went to visit the golden house. There are N rooms in this golden
house and its owner needs someone to take care of the management of this house.
As you have been unemployed for a long time, you are interested in this job. Owner
of this house wanted an intelligent manager for this role, so he created one puzzle
within that golden house. The person who will be able to solve that puzzle will be the
manager of the golden house.
Owner of the house kept some numbers of golden coins in each room. You have to
choose two rooms, one from where you will enter and other one from where you will
exit. From any room either you can exit, or you can move to the next room. While
visiting any room you will collect all the gold coins, and if you enter any room then
you can’t skip collecting gold coins from that room, you have to take those coins.
Owner wants to have exactly K coins, when you exit the room, he guarantees that
there will be at least one possible solution for this puzzle.
Given number of rooms (N), and number of gold coins in N rooms. You have to find
room numbers from where you will start and from where you will exit. If there are
more than one solution possible, then you have to provide a solution with a smaller
starting room number.
You can assume that room numbers will start from 1 and end at N.

Hint: Find a continuous subsequence whose sum will be exactly equal to K.

Example 1:
• Input:
10 15 -> N =10, K = 15
5 3 7 14 18 1 18 4 8 3 -> Number of gold coins in each room.
• Output:
1 3

Explanation: There are ten rooms in the house. You want to have the Total sum of
gold coins in continuous sequence of room to be 15 There are two solutions from
this i.e. [1, 3] and [8, 10] then the solution with a smaller starting room number will be
printed hence [1, 3] is output.
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
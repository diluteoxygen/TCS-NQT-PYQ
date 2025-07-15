---
id: question-1-87a5d43a
paper: paper-07
section: Advanced Coding
questionNumber: 1
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

John is mathematics teacher in one of the classes of Dale’s school. The class has N
students.
Today is their yearly exam. And John is very strict on the answers.
As per John, no one is allowed to cheat. He will find it out from the final marks of
two adjacent students.

The marks of N students are mentioned in M[ ], with index 1 to N.

All of the students are seated one behind the other based on their roll numbers,
which is from 1 to N.
If any two adjacent (one behind the other) students have same marks, then it will
be considered as cheating, and the latter student will be removed from the merit
list. The student sitting behind is considered as cheater.

At the next level is the process of re-evaluation, which is performed by another
Department. The re-evaluation can impact marks of K students. The re-evaluation
will update their marks and then again, the 3 final merit list will be declared.
The re-evaluation will be in the format of X Y. Here ‘X’ is the index of the student
whose marks needs to be changed from the original value to Y. Each re-evaluation is
independent, and the merit list is updated after each re-evaluation.
After each re-evaluation the merit list is updated, where the cheater is filtered out if
there is any.
Your task is to find the maximum number of students that were part of the merit list
After each re-evaluation.
Only the final merit list is visible to all students.

Let us try to understand it with an example.

Consider there are total N = 5 student with the respective marks M = [1,1,2,5,2].
So, N = 5 and M = [1, 1, 2, 5, 2].

After re-evaluation there were 2 (K = 2) students whose marks are updated. X[1] = 3 (Y) X[4] = 2 (Y) Hence in our scenario, input will look something like 5 2 1 1 2 5 2 1 3 4 2 Now as per teacher’s rule, no two students should have same marks, otherwise they will all be removed from the merit list. Let’s consider the first re-evaluation: the marks of M[1] which is currently 1, will now be updated to 3. So, the marks will look something like = [3 1 2 5 2]. Clearly no two adjacent students have same marks, hence all the students who participated will
Be in the merit list. So, the answer is 5. So, the answer is 5 for this re-evaluation. In the second re-evaluation: the marks of M[4] which is currently 5, will now be updated to 2. So, the marks will look something like = [3 1 2 2 2]. Clearly M[3], M[4] and M[5] have all the same marks. But only the students sitting behind will be considered as a cheater. So, M[4] and M[5] will be taken out from the merit list. So, now the merit list
Consists of only 3 students M[1], M[2] and M[3]. So, the answer is 3 for this re-evaluation. Python
Def fun(x, y, n): Arr[x - 1] = y

ans = 1

for i in range(1, n):
if arr[i] != arr[i - 1]:
ans += 1

return ans

n = int(input())
k = int(input())
Arr = []
for i in range(n):
Arr.append(int(input()))
for i in range(k):
x = int(input())
y = int(input())
print(fun(x, y, n), end="")
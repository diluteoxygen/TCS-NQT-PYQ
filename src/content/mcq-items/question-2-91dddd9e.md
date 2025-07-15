---
id: question-2-91dddd9e
paper: paper-01
section: Advanced Coding
questionNumber: 2
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

Jack is a sports teacher at St. Patrick’s School. He makes games not only to make
the student fit, but So smart.

So, he lined up all the N numb class. of students in his class.

At each position he has fixed a board with the Integer number printed on it. Each of
the numbers are unique and are in exactly the range of N. Let us say there are 10
students, then the boards will be printed with numbers from 1 to 10 in a random
order given by the sequence A[ ]
As a rule, all students wear a jersey with their numbers printed on it. So if there are
students, each will have a unique jersey number just like a football team.
Now, in the beginning, all the students will stand as per the increasing order of their
jersey numbers, from left to right.
The only difference will be their respective board number which is placed at their
respective location. The board location is fixed and cannot be changed. We can
consider the arrangement as below. Suppose there are students, and the board is
placed in the order of [2 3 1 5 4]
Board — 2, 3, 1, 5, 4
Student’s Jersey — 1, 2, 3, 4, 5

Now the game begins.
• After every beat of the drum, each student will have to move to that location (index),
where his board is pointing to. In the above case student with jersey 1 is standing with

board 2, so now he will have to move to location 2. Similarly, all the other students will
Do.

So after first beat of the drum, the alignment will be:

Board — 2, 3, 1, 5, 4

This keeps going on and on, until all the students are back the way they were at the
beginning. So, after 6 beats of the drum, all the students will be aligned the same
way as before.
Given N and the order of board of the respective positions, find the number of beats
required to bring back the students to their original position.
So, for the above case the answer is 6

Example 1:
Input:
3 Input integer, N
{1, 2, 3}->Input integer. B[], board alignment.

Output:
1 -> Output

Explanation:
All the students will be standing as board positions;

Board — 1, 2, 3
Student’s Jersey –1, 2, 3

After first beat of the drum:
Jersey 1 will move to index 1.
Jersey 2 will move to index 2.
Jersey 3 will move to index 3.
Hence, they will be back on their own position in just 1 beat. So,
the answer is 1.

Example 2:
Input:
5- > Input integer, N
{2, 3, 1, 5, 4}-> Input integer, B[ ], board alignment.

Output:
6- > Output

Explanation:
All the students will be standing as below, with the board positions:

Board — 2, 3, 1, 5, 4
Student’s Jersey — 1, 2, 3, 4, 5

After Beat-1of the drum:
Jersey 1 has moved to index 2.
Jersey 2 has moved to index 3.
Jersey 3 has moved to index 1.
Jersey 4 has moved to index 5.
Jersey 5 has moved to index 4.
Board – 2, 3, 1, 5, 4
Student’ s Jersey — 3, 1, 2, 5, 4
After Beat-2 of the drum:
Jersey 3 has moved to index 2.
Jersey 1 has moved to index 3.
Jersey 2 has moved to index 1.
Jersey 5 has moved to index 5.
Jersey 4 has moved to index 4.
Board — 2, 3, 1, 5, 4
Student’s Jersey — 2, 3, 1, 4, 5

After Beat-3 of the drum:
Board — 2, 3, 1, 5, 4
Student’s Jersey — 1, 2, 3, 5, 4

After Beat-4 of the drum:
Board — 2, 3, 1, 5, 4
Student’s Jersey — 3, 1, 2, 4, 5

After Beat-5 of the drum:
Board — 2, 3, 1, 5, 4
Student’s Jersey — 2, 3, 1, 5, 4

After Beat-6 of the drum:
Board — 2, 3, 1, 5, 4 Student’s Jersey — 1, 2, 3, 4, 5 Hence, they will be back on their positions after 6 beats. So, the answer is 6.
Constraints: • 1<=N<=100000 • 1 <=A[i] <= N All A[i] will be distinct numbers • N and. Only Integers. The input format for testing: • First Input – Accept value of In1101 • Next ‘N’ Lines-Elements of sequence A[] C++ #include <bits/stdc++.h> #include using namespace std; int main() { int n; int B[50], arr[50]; Cout<<"Value of n "; cin>>n; for(int i=0; i<n; i++){ int a; for(int j=n-1; j>0; i++){ Cin>>a; B[j]=a; Arr[i]=i+1; } } int ans=0; while(true){

ans = ans+1;

int ar[n];
for(int i=0; i<n; i++){
Ar[i] = arr[B[i]-1];
}
if(ar==sort(ar,ar+n)){
Break;
}
Arr = arr;
Cout<<ans;

}

return 0;
}

Python
n = int(input())
B= []
Arr = []
for i in range(n):
Bappend(int(input()))
Arr.append(i+1)

ans = 0

while 1:
ans += 1

Ar = [None]*n
for i in range(n):
Ar[i] = arr[B[i]-1]
if ar == sorted(ar):
Break

Arr = ar
print(ans)

Advanced Quantitative:
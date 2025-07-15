---
id: question-2-20bcda30
paper: paper-09
section: Advanced Coding
questionNumber: 2
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

James has a sequence of N numbers. There is also an integer X which is a random
number from other sources.
He is allowed to perform a specific operation on this sequence X number of times.
Below is the operation:
• Pick exactly one element from the sequence and multiply it with -1.

Your task is to find out the number of different sequences which can be formed by
performing the above operation.
If the answer is large, print the result modulo.
109 +7.
Let us try to understand it with an example,

N = 3
X = 2

S = [1, 2, 3]

There are 2 ways in which this operation can be performed.
• Way 1: Either -1 should be multiplied to the same element 2 times, OR
• Way 2: -1. Should be multiplied to two different elements once each.

Way 1:
If we multiply -1, to each element 2 times. It will become +1 (-1 *-1).
We will get same sequence for each element:
• Multiply -1, 2 times to S[1] : [1, 2, 3].
• Multiply -1, 2 times to S[2] : [1, 2, 3].
• Multiply -1, 2 times to S[3] : [1, 2, 3].

So, the unique sequence is just 1 which is [1, 2, 3].

Way 2:
If we multiply -1, to two different elements just 1 time each. We get:
• Multiply -1 to S[1] & S[2] : [-1, -2, 3].
• Multiply -1 to S[2] & S[3] : [1, -2, -3].
• Multiply -1 to S[1] & S[3] : [-1, 2, -3].

Hence, we get a total of 3 different sequences from Way 2.
Total 1 + 3 = 4 different sequences.
Hence the answer is 4.000

Example 1:
• Input:
3 1 -> Input integer, N, X
{1, 2, 1} -> Input integer, S
• Output:
3 -> Output
• Explanation:
In the given scenario, we have X =1. Hence, we can have this multiplication of -1 only
once. So, if we multiply -1, to different elements just 1 time. We get:
o Multiply -1 to S[1] & S[2] : [-1, -2, 1].
o Multiply -1 to S[2] & S[3] : [1, -2, -1].
o Multiply -1 to S[1] & S[3] : [-1, 2, -1].

Hence, we get a total of 3 different sequences.
So, the answer is 3.
Example 2:
• Input:
3 2 -> Input integer, N, X
{1, 2, 3} -> Input integer, S

• Output:
4 -> Output
• Explanation:
There are 2 ways in which this operation can be performed
o Way 1: Either – 1 should be multiplied to the same element 2 times, OR
o Way 2: -1 should be multiplied by different elements once.

As shown in the above Demo example, there will be a total of 4 different sequences
which can be achieved from this.
Hence the answer is 4.

C++
#include <bits/stdc++.h>
using namespace std;

//count element
int ct(int a[], int n)
{
// Creates an empty hashset
unordered_set< int> s;
// Traverse the input array
int res = 0;
for (int i = 0; i < n; i++) {
// If not present, then put it in
// hashtable and increment result
if (s.find(a[i]) == s.end()) {
s.insert(a[i]);
res++;
}
}

return res;
}

int factorial(int n) {
if(n == 0)
return 1;
int factorial = 1;
for (int i = 2; i < = n; i++)
factorial = factorial * i;
return factorial;
}
int total_combination(int n, int x) {
return factorial(n) / (factorial(x) * factorial(n - x));
}
int main(){

int n,x,ans,cnt=0;
Cin>>n>>x;
int a[n];
for(int i=0;i< n;i++){
Cin>>a[i];
}
int k= ct(a,n);

if(x%2==0){
ans = 1;

ans += total_combination(k,x);

}
else{
ans = k-1;

ans += total_combination(k,x);

}
Cout<< ans<<"\n";
return 0;
}

Python
n, x = map(int, input().split())
Arr = list(map(int, input().split()))
ans = 0

for i in range(n-1):
for j in range(i+1, n):
ans += 1

if x % 2 == 0:
ans += 1

print(ans)

Advanced Quantitative
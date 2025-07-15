---
id: question-1-5fca07d7
paper: paper-08
section: Coding
questionNumber: 1
options: 
  - = input()
  - = input()
  - "= \"\" for i in a: if i in b: Continue else: C+= i print(c)"
answer: 
  status: missing
  raw: null
authorNote: null
---

Jack and Jill are playing string game. Jack has given Jill two strings A and B.

Jill has to derive a string C from A,by deleting elements from string A, such that
string C does not contain any element of string B.
Jill needs help to do this task. She wants a program to do this as she is lazy.
Given strings A and B as input ,give string C as Output.
Example 1:
• Input:
tiger -> input string A
ti -> input string B
• Output:
ger -> Output string C
• Explanation:
After removing “t” and “i” from “tiger”, we are left with “ger”.
So, the answer is “ger”.

Example 2:
• Input:
processed -> input string A
esd -> input string B
• Output:
proc -> Output string C
• Explanation:
After removing “e” “s” and “d” from “processed”, we are left with “proc”.
So, the answer is “proc”.

Example 3:
• Input:
talent -> input string A
tens -> input string B
• Output:
Al -> Output string C

Explanation:
After removing “t” “e” and “n” from “talent”, we are left with “al”.
So, the answer is “al”.

C++
#include <bits/stdc++.h>
using namespace std;

int main() {
string a,b;
Cin>>a;
Cin>>b;
string c = " ";
for(int i=0; i< a.length();i++){
for(int j=0; j< b.length()-1;j++){
if(a[i]==b[i])
Continue;
else
C+=a[i];
}
}

Cout<< c<< ”\n”;
return 0;
}
Python
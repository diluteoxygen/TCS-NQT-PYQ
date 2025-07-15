---
id: question-2-329f389d
title: Question 2
sourceFile: materials/solved-paper-2024-morning.md
status: verified_pyq
difficulty: unclassified
topics:
- strings
constraints: null
sampleInput: null
sampleOutput: null
explanation: null
hint: null
note: null
referenceCode: null
ambiguousFormat: false
---

Given a string S(input consisting) of ‘*’ and ‘#’. The length of the string is variable. The task is to
find the minimum number of ‘*’ or ‘#’ to make it a valid string. The string is considered valid if the
number of ‘*’ and ‘#’ are equal. The ‘*’ and ‘#’ can be at any position in the string.
Note : The output will be a positive or negative integer based on number of ‘*’ and ‘#’ in the input
string.
(*>#): positive integer
(#>*): negative integer
(#=*): 0
Example 1:
Input 1:
###*** -> Value of S
Output :
0 → number of * and # are equal

#include <bits/stdc++.h>
using namespace std;
int main()
{
string s;
int a=0,b=0;
getline(cin,s);
for(auto i:s)
if(i=='#') a++;
else if(i=='*') b++;
Cout<<b-a;
}
s=input()
A=0
B=0
for i in s:
if i=='*':

- A. +=1 elif i=='#':
- B. +=1 print(a-b)

**Solution:** in C++:

**Solution:** in Python:

**Solution:** in Java:

import java.util.*;

public class Solution
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
String str=sc.next();
int count1=0,count2=0;
for(int i=0;i<str.length();i++)
{
if(str.charAt(i)=='*')
Count1++;
else if(str.charAt(i)=='#')
Count2++;
}
System.out.println(count1-count2);
}
}

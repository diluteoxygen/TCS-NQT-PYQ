---
id: question-4-9092733f
title: Question 4
sourceFile: materials/solved-paper-2024-morning.md
status: verified_pyq
difficulty: unclassified
topics:
- strings
- math
constraints: null
sampleInput: null
sampleOutput: null
explanation: null
hint: null
note: null
referenceCode: null
ambiguousFormat: false
---

Joseph is learning digital logic subject which will be for his next semester. He usually tries to
solve unit assignment problems before the lecture. Today he got one tricky question. The
problem statement is “A positive integer has been given as an input. Convert decimal value to
binary representation. Toggle all bits of it after the most significant bit including the most
significant bit. Print the positive integer value after toggling all bits”.
Constraints :
1<=N<=100
Example 1:
Input :
10 -> Integer
Output :
5 -> result- Integer
Explanation:
Binary representation of 10 is 1010. After toggling the bits(1010), will get 0101 which represents
“5”. Hence output will print “5”.
**Solution:** in Java:

import java.util.*;
Class Solution
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
int no=sc.nextInt();
String bin="";
while(no!=0)
{
Bin=(no&1)+bin;
no=no>>1;
}
Bin=bin.replaceAll("1","2");

#include <bits/stdc++.h>
using namespace std;
int main()
{
int n; cin>>n;
int k=(1<<(int)floor(log2(n))+1)-1;
Cout<<(n^k);
}
import math
n=int(input())
k=(1<<int(math.log2(n))+1)-1
print(n^k)
Bin=bin.replaceAll("0","1");
Bin=bin.replaceAll("2","0");
int res=Integer.parseInt(bin,2);
System.out.println(res);
}
}
**Solution:** in C++

**Solution:** in Python:

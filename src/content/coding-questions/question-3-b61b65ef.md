---
id: question-3-b61b65ef
title: Question 3
sourceFile: materials/solved-paper-2024-morning.md
status: verified_pyq
difficulty: unclassified
topics:
- arrays
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

Achocolate factory is packing chocolates into the packets. The chocolate packets here
represent an array arrt of N number of integer values. The task is to find the empty packets(0) of
Chocolate and push it to the end of the conveyor belt(array).
For Example:
N=7 and arr = [4,5,0,1.9,0,5,0].
There are 3 empty packets in the given set. These 3 empty packets represented as O should be
pushed towards the end of the array
Example 1:
Input:
7 - Value of N
[4,5,0,1,0,0,5] - Element of arr[O] to arr[N-1],While input each element is separated by newline
Output:

#include <bits/stdc++.h>
using namespace std;
int main()
{
int n,j=0; cin>>n;
int a[n]={0};
for(int i=0;i<n;i++)
{
Cin>>a[j];
if(a[j]!=0) j++;
}
for(int i=0;i<n;i++) cout<<a[i]<<" ";
}
n=int(input())
j=0
L=[0 for i in range(n)]
4 5 1 9 5 0 0
Example 2:
Input:
6
— Value of N.
[6,0,1,8,0,2] - Element of arr[0] to arr[N-1], While input each element is separated by newline
Output:
6 1 8 2 0 0
**Solution:** in C++:

**Solution:** in Python:

for i in range(n):
A=int(input())
if a!=0:
L[j]=a
j+=1
for i in L:
print(i,end=" ")
**Solution:** in Java:

import java.util.*;
Class Solution
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
int n=sc.nextInt();
int arr[]=new int[n];
for(int i=0;i<n;i++)
Arr[i]=sc.nextInt();
int count=0;
for(int i=0;i<n;i++)
if(arr[i]!=0)
Arr[count++]=arr[i];
for(int i=count;i<n;i++)
Arr[i]=0;
for(int i=0;i<n;i++)
System.out.print(arr[i]+" ");
}
}

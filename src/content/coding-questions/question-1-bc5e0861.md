---
id: question-1-bc5e0861
title: Question 1
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

An automobile company manufactures both a two wheeler (TW) and a four wheeler (FW). A
company manager wants to make the production of both types of vehicle according to the given
Data below:
1st data, Total number of vehicle (two-wheeler + four-wheeler)=v
2nd data, Total number of wheels = W
The task is to find how many two-wheelers as well as four-wheelers need to manufacture as per
the given data.
Example :
Input :
200 -> Value of V
540 -> Value of W
Output :
TW =130 FW=70

#include <bits/stdc++.h>
using namespace std;
Explanation:
130+70 = 200 vehicles
(70*4)+(130*2)= 540 wheels
Constraints :
2<=W
W%2=0
V<W
Print “INVALID INPUT” , if inputs did not meet the constraints.
The input format for testing
The candidate has to write the code to accept two positive numbers separated by a new line.
First Input line - Accept value of V.
Second Input line- Accept value for W.
The output format for testing
Written program code should generate two outputs, each separated by a single space
Character(see the example)
Additional messages in the output will result in the failure of test case
**Solution:** in C++:

v=int(input())
w=int(input())
if (w&1)==1 or w<2 or w<=v:
print("INVALID INPUT")
else:
x=((4*v) -w)//2
print("TW={0} FW={1}".format(x,v-x))
int main()
{
int v,w; cin>>v>>w;
float x=((4*v)-w)/2;
if((w&1) || w<2 || w<=v)
{cout<<"INVALID INPUT"; return 0;}
Cout<<"TW="<<x<<" "<<"FW="<<v-x;
}
**Solution:** in Python:

**Solution:** in Java:

import java.util.*;
public class Solution
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
int v=sc.nextInt();

int w=sc.nextInt();
float res=((4*v)-w)/2;
if(w>=2 && (w%2==0) && v<w )
System.out.println("TW= "+(int)(res)+" FW= "+(int)(v-res));
else
System.out.println("INVALID INPUT");
}
}

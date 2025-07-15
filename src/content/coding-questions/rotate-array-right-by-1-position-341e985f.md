---
id: rotate-array-right-by-1-position-341e985f
title: Rotate Array Right by 1 Position
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- arrays
constraints: null
sampleInput: null
sampleOutput: null
explanation: null
hint: null
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc=new Scanner(System.in);

    int n=sc.nextInt();

    int[] arr=new int[n];

    for(int i=0;i<n;i++) arr[i]=sc.nextInt();

    int last=arr[n-1];


    for(int i=n-1;i>0;i--){

    arr[i]=arr[i-1];

    }

    arr[0]=last;

    for(int num:arr)

    System.out.print(num+" ");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Rotate Array Right by 1 Position

---
id: find-minimum-element-in-array-78ad1719
title: Find Minimum Element in Array
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

    int min=arr[0];

    for(int i=1;i<n;i++){

    if(arr[i]<min)

    min=arr[i];

    }

    System.out.println(min);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Find Minimum Element in Array

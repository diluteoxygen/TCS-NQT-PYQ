---
id: count-frequency-of-element-in-array-b44992e7
title: Count Frequency of Element in Array
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- arrays
- hashing
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

    int key=sc.nextInt();


    int count=0;

    for(int num:arr){

    if(num==key) count++;

    }

    System.out.println(count);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Count Frequency of Element in Array

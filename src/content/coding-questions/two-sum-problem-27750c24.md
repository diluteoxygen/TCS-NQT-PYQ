---
id: two-sum-problem-27750c24
title: Two Sum Problem
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- two-pointer
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

    int target=sc.nextInt();

    for(int i=0;i<n;i++){

    for(int j=i+1;j<n;j++){

    if(arr[i]+arr[j]==target){

    System.out.println(i+" "+j);

    return;

    }

    }

    }

    System.out.println("No Pair Found");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Two Sum Problem

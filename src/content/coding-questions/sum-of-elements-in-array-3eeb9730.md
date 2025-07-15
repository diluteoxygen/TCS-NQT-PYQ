---
id: sum-of-elements-in-array-3eeb9730
title: Sum of Elements in Array
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

    int sum=0;

    for(int i=0;i<n;i++){


    arr[i]=sc.nextInt();

    sum+=arr[i];

    }

    System.out.println(sum);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Sum of Elements in Array

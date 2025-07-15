---
id: find-missing-number-1-to-n-ced2caa5
title: Find Missing Number (1 to N)
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

    int[] arr=new int[n-1];

    for(int i=0;i<n-1;i++) arr[i]=sc.nextInt();

    int total=n*(n+1)/2;

    int sum=0;

    for(int num:arr) sum+=num;

    System.out.println(total-sum);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Find Missing Number (1 to N)

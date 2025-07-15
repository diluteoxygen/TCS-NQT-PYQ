---
id: move-all-zeros-to-end-06cc7fb6
title: Move All Zeros to End
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics: []
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

    int index=0;

    for(int i=0;i<n;i++){

    if(arr[i]!=0){

    arr[index++]=arr[i];

    }

    }

    while(index<n){

    arr[index++]=0;

    }

    for(int num:arr)

    System.out.print(num+" ");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Move All Zeros to End

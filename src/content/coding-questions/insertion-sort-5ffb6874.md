---
id: insertion-sort-5ffb6874
title: Insertion Sort
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

    for(int i=1;i<n;i++){

    int key=arr[i];

    int j=i-1;

    while(j>=0 && arr[j]>key){

    arr[j+1]=arr[j];

    j--;

    }

    arr[j+1]=key;

    }

    for(int num:arr)

    System.out.print(num+" ");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Insertion Sort

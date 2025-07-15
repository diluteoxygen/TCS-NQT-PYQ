---
id: selection-sort-8e5018ce
title: Selection Sort
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

    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    int[] arr = new int[n];

    for(int i=0;i<n;i++) arr[i]=sc.nextInt();

    for(int i=0;i<n-1;i++){

    int minIndex=i;

    for(int j=i+1;j<n;j++){

    if(arr[j]<arr[minIndex])

    minIndex=j;

    }

    int temp=arr[i];

    arr[i]=arr[minIndex];

    arr[minIndex]=temp;

    }

    for(int num:arr)

    System.out.print(num+" ");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Selection Sort

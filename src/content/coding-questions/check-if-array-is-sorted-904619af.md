---
id: check-if-array-is-sorted-904619af
title: Check if Array is Sorted
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

    boolean sorted=true;

    for(int i=0;i<n-1;i++){

    if(arr[i]>arr[i+1]){

    sorted=false;

    break;

    }

    }

    System.out.println(sorted ? "Sorted" : "Not Sorted");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check if Array is Sorted

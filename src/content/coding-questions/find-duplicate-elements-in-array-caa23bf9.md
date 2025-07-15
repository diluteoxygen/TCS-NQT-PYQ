---
id: find-duplicate-elements-in-array-caa23bf9
title: Find Duplicate Elements in Array
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

    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    int[] arr = new int[n];

    for(int i=0;i<n;i++) arr[i]=sc.nextInt();

    for(int i=0;i<n;i++){

    for(int j=i+1;j<n;j++){

    if(arr[i]==arr[j]){

    System.out.print(arr[i]+" ");

    break;

    }

    }

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Find Duplicate Elements in Array

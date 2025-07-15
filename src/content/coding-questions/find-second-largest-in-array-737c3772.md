---
id: find-second-largest-in-array-737c3772
title: Find Second Largest in Array
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

    for(int i = 0; i < n; i++)

    arr[i] = sc.nextInt();

    int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;

    for(int num : arr){

    if(num > first){

    second = first;

    first = num;

    } else if(num > second && num != first){

    second = num;

    }

    }

    System.out.println(second);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Find Second Largest in Array

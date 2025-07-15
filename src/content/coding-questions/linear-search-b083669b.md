---
id: linear-search-b083669b
title: Linear Search
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

    for(int i = 0; i < n; i++)

    arr[i] = sc.nextInt();

    int key = sc.nextInt();

    boolean found = false;

    for(int num : arr){

    if(num == key){

    found = true;

    break;

    }

    }

    System.out.println(found ? "Found" : "Not Found");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Linear Search

---
id: binary-search-sorted-array-eac184da
title: Binary Search (Sorted Array)
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- arrays
- math
- searching
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

    int low = 0, high = n - 1;

    boolean found = false;

    while(low <= high){

    int mid = (low + high) / 2;

    if(arr[mid] == key){

    found = true;

    break;

    }

    else if(arr[mid] < key)

    low = mid + 1;

    else

    high = mid - 1;

    }

    System.out.println(found ? "Found" : "Not Found");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Binary Search (Sorted Array)

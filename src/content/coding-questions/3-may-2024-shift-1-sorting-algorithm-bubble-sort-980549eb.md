---
id: 3-may-2024-shift-1-sorting-algorithm-bubble-sort-980549eb
title: 3 May 2024 Shift 1 — Sorting Algorithm (Bubble Sort)
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- arrays
- sorting
constraints: null
sampleInput: '5

  64 25 12 22 11

  '
sampleOutput: 11 12 22 25 64
explanation: null
hint: 'Outer loop N-1 times. Inner loop compares adjacent pairs. Swap if arr[i]>arr[i+1].
  Stop early if no swaps.

  '
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

    for(int i = 0; i < n-1; i++){

    for(int j = 0; j < n-i-1; j++){

    if(arr[j] > arr[j+1]){

    int temp = arr[j];

    arr[j] = arr[j+1];

    arr[j+1] = temp;

    }

    }

    }

    for(int num : arr)

    System.out.print(num + " ");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Sort an array of N integers in ascending order using Bubble Sort. Input: First line = N. Second line = N space-separated integers.

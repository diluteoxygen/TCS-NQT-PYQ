---
id: count-even-and-odd-numbers-in-array-b507825b
title: Count Even and Odd Numbers in Array
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

    int even = 0, odd = 0;

    for(int i=0;i<n;i++){

    arr[i]=sc.nextInt();

    if(arr[i]%2==0)

    even++;


    else

    odd++;

    }

    System.out.println("Even: " + even);

    System.out.println("Odd: " + odd);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Count Even and Odd Numbers in Array

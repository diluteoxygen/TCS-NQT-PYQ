---
id: fibonacci-series-first-n-terms-a16f3ffc
title: Fibonacci Series (First N Terms)
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- math
- series
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

    int a = 0, b = 1;

    for(int i = 1; i <= n; i++){

    System.out.print(a + " ");

    int c = a + b;

    a = b;

    b = c;

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Fibonacci Series (First N Terms)

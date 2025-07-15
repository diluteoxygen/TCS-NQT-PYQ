---
id: reverse-a-number-307712b2
title: Reverse a Number
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

    int rev = 0;

    while(n != 0){

    rev = rev * 10 + n % 10;

    n /= 10;

    }

    System.out.println(rev);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Reverse a Number

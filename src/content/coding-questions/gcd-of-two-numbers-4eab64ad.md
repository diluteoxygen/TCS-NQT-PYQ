---
id: gcd-of-two-numbers-4eab64ad
title: GCD of Two Numbers
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- math
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

    int a = sc.nextInt(), b = sc.nextInt();

    while(b != 0){

    int temp = b;

    b = a % b;

    a = temp;

    }

    System.out.println(a);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

GCD of Two Numbers

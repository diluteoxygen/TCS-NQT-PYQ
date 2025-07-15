---
id: lcm-of-two-numbers-4280f98e
title: LCM of Two Numbers
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

    int x = a, y = b;

    while(y != 0){

    int temp = y;

    y = x % y;

    x = temp;

    }

    int gcd = x;

    int lcm = (a * b) / gcd;

    System.out.println(lcm);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

LCM of Two Numbers

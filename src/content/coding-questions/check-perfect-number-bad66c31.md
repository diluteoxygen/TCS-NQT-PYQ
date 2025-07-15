---
id: check-perfect-number-bad66c31
title: Check Perfect Number
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

    int n = sc.nextInt();

    int sum = 0;

    for(int i = 1; i <= n/2; i++){

    if(n % i == 0)

    sum += i;

    }

    System.out.println(sum == n ? "Perfect" : "Not Perfect");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check Perfect Number

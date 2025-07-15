---
id: check-prime-number-59de1389
title: Check Prime Number
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

    boolean prime = true;

    if(n <= 1) prime = false;

    for(int i = 2; i <= Math.sqrt(n); i++){

    if(n % i == 0){

    prime = false;

    break;

    }

    }

    System.out.println(prime ? "Prime" : "Not Prime");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check Prime Number

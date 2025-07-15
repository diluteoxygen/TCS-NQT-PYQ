---
id: sum-of-prime-numbers-up-to-n-52e329e7
title: Sum of Prime Numbers up to N
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

    public static boolean isPrime(int n){

    if(n<=1) return false;

    for(int i=2;i<=Math.sqrt(n);i++){

    if(n%i==0) return false;

    }

    return true;

    }

    public static void main(String[] args){

    Scanner sc=new Scanner(System.in);

    int n=sc.nextInt();

    int sum=0;

    for(int i=2;i<=n;i++){

    if(isPrime(i))

    sum+=i;

    }

    System.out.println(sum);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Sum of Prime Numbers up to N

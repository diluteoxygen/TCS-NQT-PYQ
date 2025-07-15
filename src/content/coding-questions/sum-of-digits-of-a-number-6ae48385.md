---
id: sum-of-digits-of-a-number-6ae48385
title: Sum of Digits of a Number
sourceFile: questions.md
status: practice
difficulty: easy
topics: []
constraints: null
sampleInput: '1234'
sampleOutput: '10'
explanation: null
hint: 'While N>0: digit = N%10, sum+=digit, N=N//10.

  '
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    int sum = 0;

    while(n != 0){

    sum += n % 10;

    n /= 10;

    }

    System.out.println(sum);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Given a number N, find the sum of all its digits.

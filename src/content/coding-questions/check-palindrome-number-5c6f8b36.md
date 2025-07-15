---
id: check-palindrome-number-5c6f8b36
title: Check Palindrome Number
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- strings
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

    int temp = n, rev = 0;

    while(n != 0){

    rev = rev * 10 + n % 10;

    n /= 10;

    }

    System.out.println(temp == rev ? "Palindrome" : "Not Palindrome");


    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check Palindrome Number

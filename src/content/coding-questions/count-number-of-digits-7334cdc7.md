---
id: count-number-of-digits-7334cdc7
title: Count Number of Digits
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

    Scanner sc=new Scanner(System.in);

    int n=sc.nextInt();

    int count=0;

    while(n!=0){

    n/=10;

    count++;

    }

    System.out.println(count);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Count Number of Digits

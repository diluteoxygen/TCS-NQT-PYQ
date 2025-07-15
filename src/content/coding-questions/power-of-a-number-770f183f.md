---
id: power-of-a-number-770f183f
title: Power of a Number
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

    int base=sc.nextInt();

    int exp=sc.nextInt();

    int result=1;

    for(int i=1;i<=exp;i++)

    result*=base;

    System.out.println(result);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Power of a Number

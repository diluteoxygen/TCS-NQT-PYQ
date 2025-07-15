---
id: decimal-to-binary-b5606214
title: Decimal to Binary
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

    Scanner sc=new Scanner(System.in);

    int n=sc.nextInt();

    String binary="";

    while(n>0){

    binary=(n%2)+binary;

    n/=2;

    }

    System.out.println(binary);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Decimal to Binary

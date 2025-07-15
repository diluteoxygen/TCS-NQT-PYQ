---
id: binary-to-decimal-e641657f
title: Binary to Decimal
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

    String binary = sc.next();

    int decimal = 0;

    int power = 0;

    for(int i = binary.length()-1; i >= 0; i--){

    if(binary.charAt(i) == ''1''){

    decimal += Math.pow(2, power);

    }

    power++;

    }

    System.out.println(decimal);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Binary to Decimal

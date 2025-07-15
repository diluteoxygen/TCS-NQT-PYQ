---
id: check-leap-year-3a3b9b8d
title: Check Leap Year
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

    int year = sc.nextInt();

    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))

    System.out.println("Leap Year");

    else

    System.out.println("Not Leap Year");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check Leap Year

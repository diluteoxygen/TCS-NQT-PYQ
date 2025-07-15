---
id: reverse-a-string-without-built-in-functions-e501a0b9
title: Reverse a String Without Built-In Functions
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- strings
constraints: null
sampleInput: Hello World
sampleOutput: dlroW olleH
explanation: null
hint: 'Use a loop from len(s)-1 down to 0, build result string. Or swap in-place with
  two pointers.

  '
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc = new Scanner(System.in);

    String str = sc.nextLine();

    String rev = "";

    for(int i = str.length() - 1; i >= 0; i--)

    rev += str.charAt(i);

    System.out.println(rev);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Reverse a given string without using any built-in reverse functions or slicing.

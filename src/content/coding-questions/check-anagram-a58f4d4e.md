---
id: check-anagram-a58f4d4e
title: Check Anagram
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

    String s1 = sc.nextLine();

    String s2 = sc.nextLine();

    char[] a = s1.toCharArray();

    char[] b = s2.toCharArray();

    Arrays.sort(a);

    Arrays.sort(b);

    System.out.println(Arrays.equals(a,b) ? "Anagram" : "Not Anagram");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check Anagram

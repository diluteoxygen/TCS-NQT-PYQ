---
id: remove-specific-character-from-string-8b3194f9
title: Remove Specific Character from String
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

    Scanner sc=new Scanner(System.in);

    String str=sc.nextLine();

    char ch=sc.next().charAt(0);

    str=str.replace(Character.toString(ch),"");

    System.out.println(str);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Remove Specific Character from String

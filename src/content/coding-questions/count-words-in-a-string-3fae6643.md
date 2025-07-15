---
id: count-words-in-a-string-3fae6643
title: Count Words in a String
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

    String str=sc.nextLine().trim();

    if(str.isEmpty()){

    System.out.println(0);

    } else {

    String[] words=str.split("\\s+");

    System.out.println(words.length);

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Count Words in a String

---
id: reverse-words-in-a-sentence-a3215806
title: Reverse Words in a Sentence
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- strings
constraints: null
sampleInput: Hello World TCS
sampleOutput: olleH dlroW SCT
explanation: null
hint: 'Split by space, reverse each word using slicing [::-1], join back with space.

  '
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc=new Scanner(System.in);

    String str=sc.nextLine();

    String[] words=str.split(" ");

    for(int i=words.length-1;i>=0;i--){

    System.out.print(words[i]+" ");

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Given a sentence, reverse each word individually while keeping the word order intact. Example: "Hello World" becomes "olleH dlroW"

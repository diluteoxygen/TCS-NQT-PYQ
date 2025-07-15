---
id: count-vowels-and-consonants-9d2dffff
title: Count Vowels and Consonants
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

    String str = sc.nextLine().toLowerCase();

    int vowels = 0, consonants = 0;

    for(char ch : str.toCharArray()){

    if(Character.isLetter(ch)){

    if("aeiou".indexOf(ch) != -1)

    vowels++;

    else

    consonants++;

    }

    }

    System.out.println("Vowels: " + vowels);

    System.out.println("Consonants: " + consonants);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Count Vowels and Consonants

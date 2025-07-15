---
id: remove-duplicates-from-string-ca60a7d4
title: Remove Duplicates from String
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- arrays
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


    String str = sc.nextLine();

    String result = "";

    for(char ch : str.toCharArray()){

    if(result.indexOf(ch) == -1)

    result += ch;

    }

    System.out.println(result);

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Remove Duplicates from String

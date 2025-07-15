---
id: check-palindrome-string-5c28f46f
title: Check Palindrome String
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

    String rev="";

    for(int i=str.length()-1;i>=0;i--)

    rev+=str.charAt(i);

    System.out.println(str.equals(rev) ? "Palindrome" : "Not

    Palindrome");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Check Palindrome String

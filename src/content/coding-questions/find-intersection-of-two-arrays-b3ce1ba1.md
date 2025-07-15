---
id: find-intersection-of-two-arrays-b3ce1ba1
title: Find Intersection of Two Arrays
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- arrays
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

    int n1=sc.nextInt();

    int[] a=new int[n1];

    for(int i=0;i<n1;i++) a[i]=sc.nextInt();

    int n2=sc.nextInt();

    int[] b=new int[n2];

    for(int i=0;i<n2;i++) b[i]=sc.nextInt();

    for(int i=0;i<n1;i++){

    for(int j=0;j<n2;j++){

    if(a[i]==b[j]){

    System.out.print(a[i]+" ");

    break;

    }

    }

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Find Intersection of Two Arrays

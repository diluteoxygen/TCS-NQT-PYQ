---
id: transpose-of-matrix-c983f86d
title: Transpose of Matrix
sourceFile: materials/coding-questions-50.md
status: unclassified
difficulty: unclassified
topics:
- matrix
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

    int r=sc.nextInt(), c=sc.nextInt();

    int[][] a=new int[r][c];

    for(int i=0;i<r;i++)

    for(int j=0;j<c;j++)

    a[i][j]=sc.nextInt();

    for(int j=0;j<c;j++){

    for(int i=0;i<r;i++){

    System.out.print(a[i][j]+" ");

    }

    System.out.println();

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Transpose of Matrix

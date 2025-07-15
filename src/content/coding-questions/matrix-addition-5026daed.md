---
id: matrix-addition-5026daed
title: Matrix Addition
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- matrix
constraints: null
sampleInput: '2 2

  1 2

  3 4

  1 1

  1 1

  '
sampleOutput: '2 3

  4 5

  '
explanation: null
hint: 'Read both matrices. Use nested loops: C[i][j] = A[i][j] + B[i][j]. Print row
  by row.

  '
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc=new Scanner(System.in);


    int r=sc.nextInt(), c=sc.nextInt();

    int[][] a=new int[r][c];

    int[][] b=new int[r][c];

    int[][] sum=new int[r][c];

    for(int i=0;i<r;i++)

    for(int j=0;j<c;j++)

    a[i][j]=sc.nextInt();

    for(int i=0;i<r;i++)

    for(int j=0;j<c;j++)

    b[i][j]=sc.nextInt();

    for(int i=0;i<r;i++){

    for(int j=0;j<c;j++){

    sum[i][j]=a[i][j]+b[i][j];

    System.out.print(sum[i][j]+" ");

    }

    System.out.println();

    }

    }

    }

    '
  verified: false
ambiguousFormat: false
---

Given two N x M matrices A and B of the same size, compute and print their sum matrix C where C[i][j] = A[i][j] + B[i][j].

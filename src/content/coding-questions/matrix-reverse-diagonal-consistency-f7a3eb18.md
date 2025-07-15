---
id: matrix-reverse-diagonal-consistency-f7a3eb18
title: Matrix Reverse Diagonal Consistency
sourceFile: questions.md
status: unclassified
difficulty: unclassified
topics:
- arrays
- matrix
constraints: null
sampleInput: '3 3

  6 4 2

  7 2 1

  2 5 3

  '
sampleOutput: '48'
explanation: "Diagonal [6,2,5] is not equal → condition fails  \nFirst row = [6,4,2]\
  \ → product = 48  \n"
hint: "Use a HashMap where key = (i − j) and value = first element of that diagonal.\
  \  \nCompare remaining elements in same diagonal.\n\n\n```java\nimport java.util.*;\n\
  class Main{\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\n\
  int m=sc.nextInt();\nint n=sc.nextInt();\n\nint[][] mat=new int[m][n];\nfor(int\
  \ i=0;i<m;i++){\nfor(int j=0;j<n;j++){\nmat[i][j]=sc.nextInt();\n}\n}\n\nboolean\
  \ flag=true;\nHashMap<Integer,Integer> map=new HashMap<>();\n\nfor(int i=0;i<m;i++){\n\
  for(int j=0;j<n;j++){\nint key=i-j;\nif(!map.containsKey(key)){\nmap.put(key,mat[i][j]);\n\
  }else{\nif(map.get(key)!=mat[i][j]){\nflag=false;\n}\n}\n}\n}\n\nint result=1;\n\
  \nif(flag){\nresult=0;\nfor(int j=0;j<n;j++){\nresult+=mat[0][j];\n}\n}else{\nfor(int\
  \ j=0;j<n;j++){\nresult*=mat[0][j];\n}\n}\n\nSystem.out.println(result);\n}\n}\n\
  ```\n"
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc=new Scanner(System.in);

    int m=sc.nextInt();

    int n=sc.nextInt();


    int[][] mat=new int[m][n];

    for(int i=0;i<m;i++){

    for(int j=0;j<n;j++){

    mat[i][j]=sc.nextInt();

    }

    }


    boolean flag=true;

    HashMap<Integer,Integer> map=new HashMap<>();


    for(int i=0;i<m;i++){

    for(int j=0;j<n;j++){

    int key=i-j;

    if(!map.containsKey(key)){

    map.put(key,mat[i][j]);

    }else{

    if(map.get(key)!=mat[i][j]){

    flag=false;

    }

    }

    }

    }


    int result=1;


    if(flag){

    result=0;

    for(int j=0;j<n;j++){

    result+=mat[0][j];

    }

    }else{

    for(int j=0;j<n;j++){

    result*=mat[0][j];

    }

    }


    System.out.println(result);

    }

    }

    '
  verified: true
ambiguousFormat: false
---

You are given a matrix of size M × N.

Each group of elements that lie on the same diagonal from top-right to bottom-left is considered a diagonal group.

These diagonals are formed using:  
**i − j = constant**

Check whether all elements in every diagonal group are equal.

- If YES → return sum of first row  
- If NO → return product of first row  

---

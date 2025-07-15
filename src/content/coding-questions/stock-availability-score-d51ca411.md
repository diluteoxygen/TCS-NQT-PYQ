---
id: stock-availability-score-d51ca411
title: Stock Availability Score
sourceFile: questions.md
status: unclassified
difficulty: unclassified
topics: []
constraints: null
sampleInput: '3

  101 2

  102 1

  103 0

  4

  101 102 999 103

  '
sampleOutput: '-3'
explanation: "101 → +3  \n102 → +2  \n999 → −6  \n103 → −2  \nTotal = −3  \n"
hint: 'Use HashMap<StockID, Quantity> for fast lookup.



  ```java

  import java.util.*;

  class Main{

  public static void main(String[] args){

  Scanner sc=new Scanner(System.in);


  int n=sc.nextInt();

  HashMap<Integer,Integer> map=new HashMap<>();


  for(int i=0;i<n;i++){

  int id=sc.nextInt();

  int qty=sc.nextInt();

  map.put(id,qty);

  }


  int q=sc.nextInt();

  int score=0;


  for(int i=0;i<q;i++){

  int id=sc.nextInt();


  if(map.containsKey(id)){

  int qty=map.get(id);

  if(qty==2) score+=3;

  else if(qty==1) score+=2;

  else if(qty==0) score-=2;

  }else{

  score-=6;

  }

  }


  System.out.println(score);

  }

  }

  ```

  '
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc=new Scanner(System.in);


    int n=sc.nextInt();

    HashMap<Integer,Integer> map=new HashMap<>();


    for(int i=0;i<n;i++){

    int id=sc.nextInt();

    int qty=sc.nextInt();

    map.put(id,qty);

    }


    int q=sc.nextInt();

    int score=0;


    for(int i=0;i<q;i++){

    int id=sc.nextInt();


    if(map.containsKey(id)){

    int qty=map.get(id);

    if(qty==2) score+=3;

    else if(qty==1) score+=2;

    else if(qty==0) score-=2;

    }else{

    score-=6;

    }

    }


    System.out.println(score);

    }

    }

    '
  verified: true
ambiguousFormat: false
---

You are given stock IDs and their quantities, along with a list of queries.

Calculate a score based on availability:

- qty = 2 → +3  
- qty = 1 → +2  
- qty = 0 → −2  
- not present → −6  

---

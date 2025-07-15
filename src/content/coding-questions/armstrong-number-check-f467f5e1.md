---
id: armstrong-number-check-f467f5e1
title: Armstrong Number Check
sourceFile: questions.md
status: verified_pyq
difficulty: easy
topics:
- math
constraints: null
sampleInput: '153'
sampleOutput: 'YES'
explanation: null
hint: 'Count digits n. Sum each digit^n. Compare with original.

  '
note: null
referenceCode:
- lang: java
  code: 'import java.util.*;

    class Main{

    public static void main(String[] args){

    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    int temp = n, sum = 0;

    while(n != 0){

    int digit = n % 10;

    sum += digit * digit * digit;

    n /= 10;

    }

    System.out.println(temp == sum ? "Armstrong" : "Not Armstrong");

    }

    }

    '
  verified: false
- lang: java
  code: 'import java.util.*;

    class Main{

    public static int factorial(int n){

    int fact = 1;

    for(int i = 1; i <= n; i++)

    fact *= i;

    return fact;

    }

    public static void main(String[] args){

    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    int temp = n, sum = 0;

    while(n != 0){

    int digit = n % 10;

    sum += factorial(digit);

    n /= 10;

    }

    System.out.println(temp == sum ? "Strong" : "Not Strong");

    }

    }

    '
  verified: false
ambiguousFormat: false
---

A number is an Armstrong number if the sum of its own digits, each raised to the power of the number of digits, equals the original number. Example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 ✓

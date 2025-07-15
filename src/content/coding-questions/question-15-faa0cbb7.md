---
id: question-15-faa0cbb7
title: Question 15
sourceFile: materials/solved-paper-2024-morning.md
status: verified_pyq
difficulty: unclassified
topics: []
constraints: null
sampleInput: null
sampleOutput: null
explanation: null
hint: null
note: null
referenceCode: null
ambiguousFormat: false
---

What will be the output of the following code?
#include <stdio.h>
int main()
{
int a=64;

Double b=256;
int *x=&a;
Double *y=&b;
printf("x and y are %d and %d",sizeof(x),sizeof(y));
return 0;
}

- A. Compilation error
- B. x and y are 8 and 8
- C. x and y are 1 and 2
- D. Runtime error

**Answer:** B) x and y are 8 and 8

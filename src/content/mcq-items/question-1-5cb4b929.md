---
id: question-1-5cb4b929
paper: paper-01
section: Advanced Coding
questionNumber: 1
options: null
answer: 
  status: missing
  raw: null
authorNote: null
---

Ayush is working on a strange algorithm where he wants to convert a string from A to
B, both the strings of equal length N
Below are the rules which can be performed to convert a string
• String A and B are of equal length
Both of them are in lower case
• Choose a subset X from the string A, between the index 1 and N.
• Let ‘s’ be the letter which alphabetically comes before all other letters in the subset. Let
‘s’ be called the ‘smallest element’ in the subset.
• Replace all the elements of subset with the letter ‘s’

Find the minimum number of moves which is required to perform the conversion. If it
is not possible to convert the string from A to b then return -1
Let us try to understand it with and examples
Suppose there are 2 strings
A= abcab

B= aabab

Operation 1:

Now we have chosen a subset S, let us say we have taken index 2,3,5 from A

Then the subset S becomes [bcb]

Next, we have to choose the smallest element , 6041 here, which is b here in b & c

Next, we have to replace all the other elements in subset with this element. So ‘b’
with replace everything in [bcb]. which becomes [bbb].

Now we will place all the respective elements back to their respective index. This will
update the original string as [abbab]
Operation 2:

Original string [abbab]

Now we have chosen a subset S, let say we have taken a index 1,2,4 from A
Then the subset become [aba]
Next, we have to choose the smallest element, which is here in a & b.

Next, we have to replace the smallest with all the other elements in subset. So ‘a’ will
replace everything in [aba]

Now we will place all the respective elements back to their respective index. This will
update the original string as [aabab]
This is exactly same as String B
Hence it is possible to convert string A to B, with 2 operations. So, the answer is 2.

Example 1: Input:
2-> Input integer, N
De-> input string, A
Cd-> Input string, B

Output:

-1

Explanation:

In the above example we can clearly see that there is an alphabet in A which is
completely different from B. hence it is not possible to convert A to B
So the answer is -1

Example 2:

Input:

4- > input integer, N
Abab-> input string, A
Abaa-> input string A
Output:
1 -> Output

Explanation:

Operation 1:

Now we have chosen a subset S, let say we have taken index 3,4 from A
Then the Subset S becomes [ab]
Next, we have to choose the smallest element, which is a here in a & b
Next, we have to replace the smallest with all the other elements in subset. So ‘a’ will
replace everything in [abl, which becomes [aa]
Now we will place all the respective elements back to their respective index. This will
update the original string as [abaa]

This is exactly same as String B
Hence it is possible to convert string A to B. with 1 operation. So, the answer is 1.

Constraints:
1. 1<=N<=1000
2. N integer
3. Only lower case letters of the English alphabet
4. Length of A,B = N

The input format for testing
1. First Input-Accept value of Integer, N.
2. Second Input-Accept value of string, A (Next Line)
3. Third Input-Accept value of string, B(Next Line)

The Output format for testing
1. The output is an integer as per above logic. (Check the output in Example 1, Example 21
2. Additional messages in output will cause the failure of test cases

Instructions:
1. System doesn’t allow any kind of hard coded input value/values.
2. Written program code by the candidate will be verified against the inputs which are
supplied from the system.

Python
n = int(input())

a = input()
b = input() if a == b: print(1) res, res2 = "", "" for x in range(n): if a[x] != b[x]: res += a[x] res2 += b[x]

ans = 0

for i in a:
if ans != 0:
Break
if i not in b:
print(-1)
Break
else:
for x in set(res2):

if x not in a:
print(-1)
ans += 1

Break
else:
print(len(set(res2)))
ans += 1

Break
if ans == 1:
Break
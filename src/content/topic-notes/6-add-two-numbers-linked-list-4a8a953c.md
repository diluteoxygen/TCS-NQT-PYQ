---
id: 6-add-two-numbers-linked-list-4a8a953c
title: "Pattern 1: 6. Add Two Numbers – Linked List"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Add two numbers represented as linked lists.
### Java

```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2)
{ ListNode dummy = new ListNode(0), curr = dummy;
int carry = 0;
while (l1 != null || l2 != null || carry != 0)
{ int sum = (l1 != null ? l1.val : 0) +
(l2 != null ? l2.val : 0) + carry;
carry = sum / 10;
curr.next = new ListNode(sum % 10);
curr = curr.next;
if (l1 != null) l1 = l1.next;
if (l2 != null) l2 = l2.next;
}
return dummy.next;
}
```

C++:
cpp
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2)
{ ListNode* dummy = new ListNode(0), *curr =
dummy; int carry = 0;
while (l1 || l2 || carry) {
int sum = (l1 ? l1->val : 0) +
(l2 ? l2->val : 0) + carry;
carry = sum / 10;
curr->next = new ListNode(sum % 10);
curr = curr->next;
if (l1) l1 = l1->next;
if (l2) l2 = l2->next;

}
return dummy->next;
}
### Python

```python
def addTwoNumbers(l1, l2):
dummy = ListNode(0)
curr = dummy
carry = 0
while l1 or l2 or carry:
sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
carry = sum // 10
```

curr.next = ListNode(sum % 10)
curr = curr.next
l1 = l1.next if l1 else None
l2 = l2.next if l2 else None
return dummy.next
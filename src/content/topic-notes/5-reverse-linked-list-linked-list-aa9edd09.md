---
id: 5-reverse-linked-list-linked-list-aa9edd09
title: "Pattern 1: 5. Reverse Linked List – Linked List"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Reverse a singly linked list.
### Java

```java
public ListNode reverseList(ListNode head)
{ ListNode prev = null;
while (head != null)
{ ListNode next =
head.next; head.next =
prev;
prev = head;
head = next;
}
return prev;
}
```

C++:
cpp
ListNode* reverseList(ListNode* head)
{ ListNode* prev = nullptr;
while (head) {
ListNode* next = head->next;
head->next = prev;

prev = head;
head = next;
}
return prev;
}
### Python

```python
def reverseList(head):
prev = None
while head:
nxt = head.next
```

head.next = prev
prev = head
head = nxt
return prev
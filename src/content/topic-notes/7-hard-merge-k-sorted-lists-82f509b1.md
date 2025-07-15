---
id: 7-hard-merge-k-sorted-lists-82f509b1
title: "Pattern 2: 7. Hard: Merge K Sorted Lists"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: Merge k sorted linked lists into one sorted list.
### Java

```java
public ListNode mergeKLists(ListNode[] lists) {
if (lists == null || lists.length == 0) return null;
```

PriorityQueue<ListNode> pq = new
PriorityQueue<>(Comparator.comparingInt(a -> a.val));
for (ListNode list : lists) {
if (list != null) pq.offer(list);
}
ListNode dummy = new ListNode(0);
ListNode current = dummy;
while (!pq.isEmpty())
{ current.next = pq.poll();
current = current.next;
if (current.next != null) pq.offer(current.next);
}
return dummy.next;
}
### C++

```cpp
ListNode* mergeKLists(vector<ListNode*>& lists)
{ if (lists.empty()) return nullptr;
auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
for (auto list : lists) {
if (list) pq.push(list);
}
ListNode* dummy = new ListNode(0);
ListNode* curr = dummy;
while (!pq.empty()) {
curr->next = pq.top();
pq.pop();
curr = curr->next;
if (curr->next) pq.push(curr->next);
}
return dummy->next;
}
```

Python:
python
import heapq
def mergeKLists(lists):
heap = []
for l in lists:
if l:
heapq.heappush(heap, (l.val, l))

dummy = ListNode(0)
current = dummy
while heap:
val, node = heapq.heappop(heap)
current.next = node
current = current.next
if node.next:
heapq.heappush(heap, (node.next.val, node.next))
return dummy.next
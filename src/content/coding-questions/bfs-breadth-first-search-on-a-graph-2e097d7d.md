---
id: bfs-breadth-first-search-on-a-graph-2e097d7d
title: BFS (Breadth First Search) on a Graph
sourceFile: questions.md
status: verified_pyq
difficulty: medium
topics:
- graph
constraints: null
sampleInput: '5 4

  0 1

  0 2

  1 3

  2 4

  '
sampleOutput: 0 1 2 3 4
explanation: null
hint: 'Use queue. Enqueue 0, mark visited. While queue: dequeue u, print u, enqueue
  unvisited neighbors.

  '
note: null
referenceCode: null
ambiguousFormat: false
---

Given a graph with V vertices and E edges (undirected), perform BFS starting from vertex 0 and print the traversal order.

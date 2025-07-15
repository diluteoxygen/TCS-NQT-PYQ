---
id: 6-best-time-to-buy-and-sell-stock-e3e0f8ef
title: "Pattern 3 (Inferred): 6. Best Time to Buy and Sell Stock"
category: dsa-patterns
sourceFile: materials/dsa-patterns.md
---

Description: You are given an array where prices[i] is the price of a given stock on day i.
You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.
### Java

```java
public int maxProfit(int[] prices)
{ int minPrice = Integer.MAX_VALUE;
int maxProfit = 0;
for (int price : prices) {
```

minPrice = Math.min(minPrice, price);
maxProfit = Math.max(maxProfit, price - minPrice);
}
return maxProfit;
}
### C++

```cpp
int maxProfit(vector<int>& prices)
{ int minPrice = INT_MAX;
int maxProfit = 0;
for (int price : prices) {
minPrice = min(minPrice, price);
maxProfit = max(maxProfit, price - minPrice);
}
return maxProfit;
}
```

### Python

```python
def maxProfit(prices):
min_price = float('inf')
max_profit = 0
for price in prices:
min_price = min(min_price, price)
max_profit = max(max_profit, price - min_price)
return max_profit
```
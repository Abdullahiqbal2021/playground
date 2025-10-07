// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

export const maxProfit = (prices: number[]) => {
	let profit = 0;
	let minPrice = prices[0] as number;

	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i] ?? 0);
		profit = Math.max(profit, (prices[i] ?? 0) - minPrice);
	}

	return profit;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
export const maxProfit = (prices: number[]) => {
	let profit = 0;
	for (let i = 0; i < prices.length; i++) {
		const curr = prices[i] as number;
		const next = prices[i + 1] as number;

		if (next > curr) profit += next - curr;
	}
	return profit;
};

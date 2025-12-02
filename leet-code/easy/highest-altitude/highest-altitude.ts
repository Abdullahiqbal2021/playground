// https://leetcode.com/problems/find-the-highest-altitude
export const largestAltitude = (gain: number[]) => {
	let maxAltitude = 0;
	let aggregation = 0;
	for (const g of gain) {
		aggregation += g;
		maxAltitude = Math.max(aggregation, maxAltitude);
	}
	return maxAltitude;
};

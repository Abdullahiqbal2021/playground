// https://leetcode.com/problems/contains-duplicate-ii/description/

export const containsNearbyDuplicate = (nums: number[], k: number) => {
	const indexMap = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num === undefined) continue;
		const prev = indexMap.get(num);

		if (prev === undefined) {
			indexMap.set(num, i);
		} else if (i - prev <= k) {
			return true;
		} else {
			indexMap.set(num, i);
		}
	}
	return false;
};

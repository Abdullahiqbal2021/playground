// https://leetcode.com/problems/single-number/description/
export const singleNumber = (nums: number[]) => {
	const map = new Map<number, number>();
	for (const num of nums) {
		if (map.get(num)) {
			map.delete(num);
			continue;
		}
		map.set(num, 1);
	}
	return map.keys().next().value;
};

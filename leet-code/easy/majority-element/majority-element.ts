// https://leetcode.com/problems/majority-element/
// export const majorityElement = (nums: number[]) => {
// 	const obj: Record<number, number> = {};
// 	for (const num of nums) {
// 		obj[num] = (obj[num] ?? 0) + 1;
// 	}
// 	return Object;
// };

export const majorityElement = (nums: number[]) => {
	nums.sort();
	return nums[Math.floor(nums.length / 2)];
};

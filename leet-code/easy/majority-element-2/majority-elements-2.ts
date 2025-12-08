// https://leetcode.com/problems/majority-element
export const majorityElement = (nums: number[]) => {
	// eslint-disable-next-line @typescript-eslint/require-array-sort-compare
	nums.sort();
	return nums[Math.floor(nums.length / 2)];
};

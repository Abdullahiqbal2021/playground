// https://leetcode.com/problems/majority-element
export const majorityElement = (nums: number[]) => {
	nums.sort();
	return nums[Math.floor(nums.length / 2)];
};

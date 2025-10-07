/* eslint-disable @typescript-eslint/prefer-for-of */
// https://leetcode.com/problems/remove-element/
export const removeElement = (nums: number[], val: number) => {
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[k] = nums[i] as number;
			k++;
		}
	}
	return k;
};

// https://leetcode.com/problems/move-zeroes/description/
export const moveZeroes = (nums: number[]) => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];
		if (item !== 0) {
			nums.splice(count, 0, ...nums.splice(i, 1));
			count++;
		}
	}
};

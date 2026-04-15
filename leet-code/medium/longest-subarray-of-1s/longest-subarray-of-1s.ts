// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
export const longestSubarray = (nums: number[]) => {
	let left = 0;
	let zeros = 0;
	let max = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) zeros++;

		while (zeros > 1) {
			if (nums[left] === 0) zeros--;
			left++;
		}
		max = Math.max(max, right - left);
	}
	return max;
};

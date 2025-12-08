// https://leetcode.com/problems/max-consecutive-ones-iii
// export const longestOnes = (nums: number[], k: number) => {
// 	let left = 0;
// 	let right = 0;
// 	let maxCount = 0;

// 	while (right < nums.length) {
// 		if (nums[right] === 0) {
// 			k--;
// 		}

// 		while (k < 0) {
// 			if (nums[left] === 0) {
// 				k++;
// 			}
// 			left++;
// 		}

// 		maxCount = Math.max(maxCount, right - left + 1);

// 		right++;
// 	}

// 	return maxCount;
// };

export const longestOnes = (nums: number[], k: number) => {
	let i = 0;
	let j = 0;
	while (j < nums.length) {
		if (nums[j++] === 0) {
			k--;
		}
		if (k < 0) {
			if (nums[i++] === 0) {
				k++;
			}
		}
	}
	return j - i;
};

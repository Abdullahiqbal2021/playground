// https://leetcode.com/problems/max-number-of-k-sum-pairs/

// !Hitting execution limit for large inputs - Time Complexity On3
// export const maxOperations = (nums: number[], k: number) => {
// 	let count = 0;
// 	outerLoop: for (let i = nums.length - 1; i >= 0; i--) {
// 		const outer = nums[i] as number;

// 		for (let j = i - 1; j >= 0; j--) {
// 			const inner = nums[j] as number;
// 			if (outer + inner === k) {
// 				count++;
// 				nums.splice(i, 1);
// 				nums.splice(j, 1);
// 				continue outerLoop;
// 			}
// 		}
// 	}
// 	return count;
// };

export const maxOperations = (nums: number[], k: number) => {
	nums.sort((a, b) => a - b);

	let count = 0;
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const sum = (nums[left] as number) + (nums[right] as number);
		if (sum === k) {
			count++;
			left++;
			right--;
		} else if (sum < k) {
			left++;
		} else {
			right--;
		}
	}
	return count;
};

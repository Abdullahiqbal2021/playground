// https://leetcode.com/problems/container-with-most-water
export const maxArea = (height: number[]) => {
	if (!height.length) return 0;
	let res = 0;
	let left = 0;
	let right = height.length - 1;

	while (left !== right) {
		const leftVal = height[left] ?? 0;
		const rightVal = height[right] ?? 0;
		const area = (right - left) * Math.min(leftVal, rightVal);
		res = Math.max(res, area);
		if (leftVal <= rightVal) {
			left++;
		} else {
			right--;
		}
	}
	return res;
};

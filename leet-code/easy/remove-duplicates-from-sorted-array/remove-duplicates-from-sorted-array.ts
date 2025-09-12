export const removeDuplicates = (nums: number[]) => {
	return [...new Set(nums)].length;
};

// https://leetcode.com/problems/contains-duplicate
export const containsDuplicate = (arr: number[]) => {
	return !(arr.length === [...new Set(arr)].length);
};

// https://leetcode.com/problems/search-insert-position
export const searchInsert = (arr: number[], target: number) => {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const curr = arr[mid] as number;

		if (curr === target) return mid;
		if (curr < target) low = mid + 1;
		if (curr > target) high = mid - 1;
	}
	return low;
};

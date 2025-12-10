// https://leetcode.com/problems/filter-elements-from-array

type TFn = (n: number, i: number) => unknown;

export const filter = (arr: number[], fn: TFn) => {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		const r = fn(arr[i] as number, i);
		if (r) res.push(arr[i]);
	}
	return res;
};

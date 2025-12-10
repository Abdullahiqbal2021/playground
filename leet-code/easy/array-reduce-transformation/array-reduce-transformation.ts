// https://leetcode.com/problems/array-reduce-transformation
// cSpell:words accum
type TFn = (accum: number, curr: number) => number;
export const reduce = (nums: number[], fn: TFn, init: number) => {
	let res = init;
	for (const num of nums) {
		res = fn(res, num);
	}
	return res;
};

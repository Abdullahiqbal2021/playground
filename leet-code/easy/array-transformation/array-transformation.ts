// https://leetcode.com/problems/apply-transform-over-each-element-in-array
export const map = (arr: number[], fn: (n: number, i: number) => number) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i] as number, i));
	}
	return newArr;
};

// https://leetcode.com/problems/happy-number/

export const isHappy = (
	num: number,
	checkedSet = new Set<number>(),
): boolean => {
	if (num === 1) return true;
	const res = getSum(num);
	if (checkedSet.has(res)) return false;
	checkedSet.add(res);
	return isHappy(res, checkedSet);
};

const getSum = (num: number) => {
	return String(num)
		.split("")
		.reduce((acc, curr) => {
			const int = parseInt(curr);
			return acc + int * int;
		}, 0);
};

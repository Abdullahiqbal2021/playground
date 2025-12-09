// https://leetcode.com/problems/number-of-1-bits/
export const hammingWeight = (n: number) => {
	const binary = n.toString(2);
	let count = 0;
	for (const char of binary) {
		if (char === "1") count++;
	}
	return count;
};

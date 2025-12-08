// https://leetcode.com/problems/count-square-sum-triples
export const countTriples = (n: number) => {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = i + 1; j < n; j++) {
			const c = Math.sqrt(i * i + j * j);
			if (c <= n && Number.isInteger(c)) count++;
		}
	}
	return count * 2;
};

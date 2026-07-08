// https://leetcode.com/problems/guess-number-higher-or-lower
export const guessNumber = (n: number): number => {
	let low = 1;
	let high = n;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const result = guess(mid);

		if (result === 0) return mid;
		if (result < 0) high = mid - 1;
		else low = mid + 1;
	}

	return -1;
};

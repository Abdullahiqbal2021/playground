// https://leetcode.com/problems/sqrtx/

// Linear Search

// export const squareRoot = (num: number) => {
// 	for (let i = 0; i <= num; i++) {
// 		const curr = i * i;
// 		if (curr === num) return i;
// 		const next = (i + 1) * (i + 1);
// 		if (next > num) return i;
// 	}
// 	return 0;
// };

// Binary Search

export const squareRoot = (num: number) => {
	let low = 0;
	let high = num;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const curr = mid * mid;
		if (curr === num) return mid;
		if (curr < num) {
			const nextRight = (mid + 1) * (mid + 1);
			if (nextRight === num) return mid + 1;
			if (nextRight > num) return mid;
			low = mid + 1;
		} else if (curr > num) {
			const prevLeft = (mid - 1) * (mid - 1);
			if (prevLeft === num) return mid - 1;
			if (prevLeft < num) return mid - 1;
			high = mid - 1;
		}
	}
	return 0;
};

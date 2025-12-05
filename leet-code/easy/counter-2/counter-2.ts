// https://leetcode.com/problems/counter-ii

export const createCounter = (init: number) => {
	let copy = init;
	return {
		increment: () => ++copy,
		decrement: () => --copy,
		reset: () => {
			copy = init;
			return copy;
		},
	};
};

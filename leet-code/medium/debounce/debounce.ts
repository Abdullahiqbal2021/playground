// https://leetcode.com/problems/debounce/description/

type TFn = (...args: number[]) => void;

export const debounce = (fn: TFn, t: number) => {
	let timer: ReturnType<typeof setTimeout>;
	return (...args: number[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, t);
	};
};

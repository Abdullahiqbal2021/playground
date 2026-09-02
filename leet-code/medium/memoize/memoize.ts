// https://leetcode.com/problems/memoize
type TFn = (...params: number[]) => number;

export const memoize = (fn: TFn) => {
	const cache = new Map<string, number>();
	return (...params: number[]) => {
		const key = JSON.stringify(params);
		if (cache.has(key)) {
			return cache.get(key) as number;
		}
		const result = fn(...params);
		cache.set(key, result);
		return result;
	};
};

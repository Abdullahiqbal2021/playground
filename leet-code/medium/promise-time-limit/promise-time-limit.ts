// https://leetcode.com/problems/promise-time-limit

type TFn = (...params: unknown[]) => Promise<unknown>;

export const timeLimit = (fn: TFn, t: number) => {
	return async (...args: unknown[]) => {
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors, prefer-promise-reject-errors
				reject("Time Limit Exceeded");
			}, t);
			fn(...args).then(resolve, reject);
		});
	};
};

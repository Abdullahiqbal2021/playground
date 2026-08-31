// https://leetcode.com/problems/function-composition

type TFun = (x: number) => number;

// export const compose = (functions: TFun[]): TFun => {
// 	if (!functions.length) return (x: number) => x;
// 	return (x: number) => {
// 		let result = x;
// 		for (let i = functions.length - 1; i >= 0; i--) {
// 			result = functions[i]?.(result) as number;
// 		}
// 		return result;
// 	};
// };

export const compose = (functions: TFun[]): TFun => {
	if (!functions.length) return (x: number) => x;
	return functions.reduceRight((prev, curr) => (x) => curr(prev(x)));
};

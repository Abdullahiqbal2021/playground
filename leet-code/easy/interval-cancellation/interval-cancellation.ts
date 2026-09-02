// https://leetcode.com/problems/interval-cancellation/
type TJSONValue =
	| null
	| boolean
	| number
	| string
	| TJSONValue[]
	| { [key: string]: TJSONValue };
type TFn = (...args: TJSONValue[]) => void;

export const cancellable = (fn: TFn, args: TJSONValue[], t: number) => {
	fn(...args);
	const interval = setInterval(() => {
		fn(...args);
	}, t);
	return () => {
		clearInterval(interval);
	};
};

// https://leetcode.com/problems/return-length-of-arguments-passed/

type TJSONValue =
	| null
	| boolean
	| number
	| string
	| TJSONValue[]
	| { [key: string]: TJSONValue };

export const argumentsLength = (...args: TJSONValue[]) => {
	return args.length;
};

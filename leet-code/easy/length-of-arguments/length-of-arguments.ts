// https://leetcode.com/problems/return-length-of-arguments-passed
type TJsonValue =
	| null
	| boolean
	| number
	| string
	| TJsonValue[]
	| { [key: string]: TJsonValue };

export const argumentsLength = (...args: TJsonValue[]) => {
	return args.length;
};

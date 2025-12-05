// https://leetcode.com/problems/to-be-or-not-to-be

export const expect = (check: unknown) => {
	return {
		toBe: (val: unknown) => {
			if (check === val) return true;
			throw new Error("Not Equal");
		},
		notToBe: (val: unknown) => {
			if (check !== val) return true;
			throw new Error("Equal");
		},
	};
};

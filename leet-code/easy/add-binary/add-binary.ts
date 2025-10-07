// https://leetcode.com/problems/add-binary

export const addBinary = (a: string, b: string) => {
	if (a.length === 0 && b.length === 0) return "0";
	if (a.length === 0) return b;
	if (b.length === 0) return a;

	let aPointer = a.length - 1;
	let bPointer = b.length - 1;
	let result = "";
	let carry = 0;

	while (aPointer >= 0 || bPointer >= 0) {
		let aElement = 0;
		let bElement = 0;

		if (aPointer >= 0) aElement = Number(a[aPointer]);
		if (bPointer >= 0) bElement = Number(b[bPointer]);

		const thisDigit = aElement + bElement + carry;

		if (thisDigit === 0) {
			carry = 0;
			result = `0${result}`;
		} else if (thisDigit === 1) {
			carry = 0;
			result = `1${result}`;
		} else if (thisDigit === 2) {
			carry = 1;
			result = `0${result}`;
		} else {
			carry = 1;
			result = `1${result}`;
		}

		aPointer--;
		bPointer--;
	}

	if (carry) result = `1${result}`;

	return result;
};

// https://leetcode.com/problems/reverse-bits/
export const reverseBits = (num: number) => {
	const binary = num.toString(2).padStart(32, "0");
	let reversedBits = "";
	for (const bit of binary) {
		reversedBits = `${bit}${reversedBits}`;
	}
	return parseInt(reversedBits, 2);
};

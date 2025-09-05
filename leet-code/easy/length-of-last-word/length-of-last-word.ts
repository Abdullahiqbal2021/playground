// Problem:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// export const lengthOfLastWord = (s: string) => {
// 	const arr = s.trim().split(" ");
// 	const lastWord = arr[arr.length - 1];
// 	return lastWord ? lastWord.length : 0;
// };

export const lengthOfLastWord = (str: string) => {
	let length = 0;
	let lengthBeforeLastSpaces = 0;
	for (const s of str) {
		if (s === " ") {
			length = 0;
			continue;
		}
		length += 1;
		lengthBeforeLastSpaces = length;
	}
	return length || lengthBeforeLastSpaces;
};

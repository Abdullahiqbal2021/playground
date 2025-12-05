// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length

const vowels = new Set(["a", "e", "i", "o", "u"]);

// const calculateVowels = (str: string) => {
// 	let count = 0;
// 	for (const char of str) {
// 		if (vowels.has(char)) count++;
// 	}
// 	return count;
// };

// export const maxVowels = (str: string, k: number) => {
// 	let res = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		const subStr = str.substring(i, i + k);
// 		const count = calculateVowels(subStr);
// 		res = Math.max(res, count);
// 	}

// 	return res;
// };

const isVowel = (char: string | undefined) => {
	return vowels.has(char as string);
};

export const maxVowels = (str: string, k: number) => {
	let count = 0;
	for (let i = 0; i < k; i++) {
		if (isVowel(str[i])) count++;
	}

	let maxVowelsCount = count;

	for (let i = k; i < str.length; i++) {
		if (isVowel(str[i - k])) count--;
		if (isVowel(str[i])) count++;
		maxVowelsCount = Math.max(maxVowelsCount, count);
	}
	return maxVowelsCount;
};

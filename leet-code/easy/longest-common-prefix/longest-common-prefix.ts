export const longestCommonPrefix = (str: string[]) => {
	const sorted = str.sort((a, b) => (a < b ? -1 : 1));

	const output: string[] = [];
	const firstWord = sorted[0] ?? "";
	const lastWord = sorted[sorted.length - 1] ?? "";
	for (let i = 0; i < firstWord.length; i++) {
		const char = firstWord[i];
		if (char && char === lastWord[i]) {
			output.push(char);
		} else {
			break;
		}
	}

	return output.join("");
};

export const canBeTypedWords = (text: string, brokenLetters: string) => {
	const words = text.split(" ");
	const broken = brokenLetters.split("");
	let count = 0;
	outer: for (const word of words) {
		for (const w of word) {
			const haveBrokenLetter = broken.includes(w);
			if (haveBrokenLetter) continue outer;
		}
		count++;
	}
	return count;
};

export const firstUniqChar = (str: string) => {
	const checked: string[] = [];
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		const rest = str.slice(i + 1);
		if (char && (rest.includes(char) || checked.includes(char))) {
			checked.push(char);
			continue;
		}
		return i;
	}
	return -1;
};

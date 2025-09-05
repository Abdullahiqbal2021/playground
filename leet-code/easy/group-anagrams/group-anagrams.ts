// Problem:
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

export const groupAnagrams = (input: string[]) => {
	const map = new Map<string, string[]>();
	for (const str of input) {
		const sortedStr = str.split("").sort().join("");
		if (!map.has(sortedStr)) {
			map.set(sortedStr, [str]);
		} else {
			const a = map.get(sortedStr);
			map.set(sortedStr, [...(a ?? []), str]);
		}
	}

	return [...map.values()];
};

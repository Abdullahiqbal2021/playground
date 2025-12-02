// https://leetcode.com/problems/unique-number-of-occurrences/

export const uniqueOccurrences = (arr: number[]) => {
	const map = new Map<number, number>();
	for (const element of arr) {
		map.set(element, (map.get(element) ?? 0) + 1);
	}
	const set = new Set(map.values());
	return set.size === map.size;
};

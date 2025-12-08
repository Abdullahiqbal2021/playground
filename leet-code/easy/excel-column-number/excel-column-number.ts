// https://leetcode.com/problems/excel-sheet-column-number
export const titleToNumber = (colTitle: string) => {
	let res = 0;
	for (const char of colTitle) {
		res = res * 26 + (char.charCodeAt(0) - 64);
	}
	return res;
};

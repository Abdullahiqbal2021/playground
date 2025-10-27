// https://leetcode.com/problems/excel-sheet-column-title
export const convertToTitle = (colNumber: number) => {
	let res = "";
	let num = 0;
	while (colNumber > 0) {
		num = (colNumber - 1) % 26;
		res = `${String.fromCharCode(num + 65)}${res}`;
		colNumber = Math.floor((colNumber - num) / 26);
	}
	return res;
};

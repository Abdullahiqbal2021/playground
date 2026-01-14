// https://leetcode.com/problems/add-digits/
export const addDigits = (num: number) => {
	let res = num;
	let strNum = String(res);
	while (strNum.length !== 1) {
		res = strNum.split("").reduce((acc, next) => acc + parseInt(next), 0);
		strNum = String(res);
	}
	return res;
};

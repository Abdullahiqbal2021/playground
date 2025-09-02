export function isPalindrome(x: number): boolean {
	const xStr = String(x);
	const reverseXStr = xStr.split("").reverse().join("");
	return xStr === reverseXStr;
}

// https://leetcode.com/problems/reverse-string/

// export const reverseStringArray = (str: string[]) => {
// 	str.reverse();
// };

export const reverseStringArray = (str: string[]) => {
	let left = 0;
	let right = str.length - 1;

	while (right > left) {
		const leftVal = str[left];
		const rightVal = str[right];
		str[left] = rightVal as string;
		str[right] = leftVal as string;
		left++;
		right--;
	}
};

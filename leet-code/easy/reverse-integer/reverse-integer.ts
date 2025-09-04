const minSize = -(2 ** 31);
const maxSize = 2 ** 31 - 1;
export const reverse = (x: number) => {
	const isNegative = x < 0;
	const absNum = Math.abs(x);
	let reverseNum = "";
	for (const part of String(absNum)) {
		reverseNum = `${part}${reverseNum}`;
	}
	const result = isNegative ? Number(`-${reverseNum}`) : Number(reverseNum);
	if (result > maxSize || result < minSize) return 0;
	return result;
};

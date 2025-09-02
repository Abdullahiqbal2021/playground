const openingBrackets = ["(", "[", "{"] as const;
type TOpeningBrackets = (typeof openingBrackets)[number];

const closingBrackets = [")", "]", "}"] as const;
type TClosingBrackets = (typeof closingBrackets)[number];

const alternatingBrackets = {
	")": "(",
	"}": "{",
	"]": "[",
};
export function isValidParenthesis(s: string): boolean {
	const strArr = s.split("");
	const stack: string[] = [];
	for (const alpha of strArr) {
		if (openingBrackets.includes(alpha as TOpeningBrackets)) {
			stack.push(alpha);
			continue;
		}
		if (closingBrackets.includes(alpha as TClosingBrackets)) {
			const alternatingBracket = alternatingBrackets[alpha as TClosingBrackets];
			if (stack[stack.length - 1] === alternatingBracket) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	if (stack.length) return false;
	return true;
}

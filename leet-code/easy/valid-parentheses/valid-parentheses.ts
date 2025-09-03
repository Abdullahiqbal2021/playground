const openingBrackets = ["(", "[", "{"] as const;
type TOpeningBrackets = (typeof openingBrackets)[number];

const closingBrackets = [")", "]", "}"] as const;
type TClosingBrackets = (typeof closingBrackets)[number];

const alternatingBrackets = {
	")": "(",
	"}": "{",
	"]": "[",
} as const;

type TAlternatingBrackets = typeof alternatingBrackets;

type TIsValidParenthesis<
	Str extends string,
	Stack extends unknown[] = [],
> = Str extends `${infer First}${infer Rest}`
	? First extends TOpeningBrackets
		? TIsValidParenthesis<Rest, [First, ...Stack]>
		: First extends TClosingBrackets
			? Stack extends [infer FirstOfStack, ...infer RestOfStack]
				? TAlternatingBrackets[First] extends FirstOfStack
					? TIsValidParenthesis<Rest, RestOfStack>
					: false
				: false
			: TIsValidParenthesis<Rest, Stack>
	: Stack["length"] extends 0
		? true
		: false;

export const isValidParenthesis = <Str extends string>(
	s: Str,
): TIsValidParenthesis<Str> => {
	const stack: string[] = [];
	for (const alpha of s) {
		if (openingBrackets.includes(alpha as TOpeningBrackets)) {
			stack.push(alpha);
			continue;
		}
		if (closingBrackets.includes(alpha as TClosingBrackets)) {
			const alternatingBracket = alternatingBrackets[alpha as TClosingBrackets];
			if (stack[stack.length - 1] === alternatingBracket) {
				stack.pop();
			} else {
				return false as TIsValidParenthesis<Str>;
			}
		}
	}
	if (stack.length) return false as TIsValidParenthesis<Str>;
	return true as TIsValidParenthesis<Str>;
};

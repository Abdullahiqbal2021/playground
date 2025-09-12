import { expect, test } from "vitest";

import { validPalindrome } from "./valid-palindrome.js";

test("testing validPalindrome for test 1", () => {
	const result = validPalindrome("A man, a plan, a canal: Panama");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
});

test("testing validPalindrome for test 2", () => {
	const result = validPalindrome("race a car");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
});

test("testing validPalindrome for test 3", () => {
	const result = validPalindrome(" ");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
});

test("testing validPalindrome for test 4", () => {
	const result = validPalindrome("0P");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
});

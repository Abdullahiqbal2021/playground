import { expect, test } from "vitest";

import { isPalindrome } from "./palindrome-number.js";

test("testing isPalindrome for test 1", () => {
	const result = isPalindrome(121);
	const expected = true;
	expect(result).toStrictEqual(expected);
});

test("testing isPalindrome for test 2", () => {
	const result = isPalindrome(-121);
	const expected = false;
	expect(result).toStrictEqual(expected);
});

test("testing isPalindrome for test 3", () => {
	const result = isPalindrome(10);
	const expected = false;
	expect(result).toStrictEqual(expected);
});

import { expect, test } from "vitest";

import { isValidParenthesis } from "./valid-parentheses.js";

test("testing isValidParenthesis for test 1", () => {
	const result = isValidParenthesis("()");
	const expected = true;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 2", () => {
	const result = isValidParenthesis("()[]{}");
	const expected = true;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 3", () => {
	const result = isValidParenthesis("(]");
	const expected = false;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 4", () => {
	const result = isValidParenthesis("(25 + [3 / 2 * 1])");
	const expected = true;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 5", () => {
	const result = isValidParenthesis("([)]");
	const expected = false;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 6", () => {
	const result = isValidParenthesis("(");
	const expected = false;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 7", () => {
	const result = isValidParenthesis("}{");
	const expected = false;
	expect(result).toStrictEqual(expected);
});

test("testing isValidParenthesis for test 8", () => {
	const result = isValidParenthesis("no bracket");
	const expected = true;
	expect(result).toStrictEqual(expected);
});

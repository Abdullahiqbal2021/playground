import { expect, test } from "vitest";

import { findIndex } from "./find-the-index.js";

test("testing findIndex for test 1", () => {
	const result = findIndex("sadbutsad", "sad"); // cSpell: disable-line
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

test("testing findInString for test 2", () => {
	const result = findIndex("leetcode", "leeto"); // cSpell: disable-line
	const expected = -1;
	expect(result).toStrictEqual(expected);
});

test("testing findIndex for test 3", () => {
	const result = findIndex("fooBarBaz", "Bar"); // cSpell: disable-line
	const expected = 3;
	expect(result).toStrictEqual(expected);
});

test("testing findIndex for test 3", () => {
	const result = findIndex("Bar", "Bar"); // cSpell: disable-line
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

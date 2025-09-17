// https://leetcode.com/problems/reverse-string/description/
import { expect, test } from "vitest";
import { reverseStringArray } from "./reverse-string.js";

test("testing reverseStringArray for test 1", () => {
	const arr = ["h", "e", "l", "l", "o"];
	reverseStringArray(arr);
	const expected = ["o", "l", "l", "e", "h"];
	expect(arr).toStrictEqual(expected);
});

test("testing reverseStringArray for test 2", () => {
	const arr = ["H", "a", "n", "n", "a", "h"];
	reverseStringArray(arr);
	const expected = ["h", "a", "n", "n", "a", "H"];
	expect(arr).toStrictEqual(expected);
});

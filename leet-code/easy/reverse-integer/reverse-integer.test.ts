import { expect, test } from "vitest";

import { reverse } from "./reverse-integer.js";

test("testing reverse for test 1", () => {
	const result = reverse(123);
	const expected = 321;
	expect(result).toStrictEqual(expected);
});

test("testing reverse for test 2", () => {
	const result = reverse(-123);
	const expected = -321;
	expect(result).toStrictEqual(expected);
});

test("testing reverse for test 3", () => {
	const result = reverse(120);
	const expected = 21;
	expect(result).toStrictEqual(expected);
});

test("testing reverse for test 4", () => {
	const result = reverse(-2142312343);
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

test("testing reverse for test 5", () => {
	const result = reverse(21423255);
	const expected = 55232412;
	expect(result).toStrictEqual(expected);
});

test("testing reverse for test 6", () => {
	const result = reverse(100000000002);
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

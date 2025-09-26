import { expect, test } from "vitest";

import { searchInsert } from "./search-insert-position.js";

test("testing searchInsert for test 1", () => {
	const result = searchInsert([1, 3, 5, 6], 5);
	const expected = 2;
	expect(result).toStrictEqual(expected);
});

test("testing searchInsert for test 2", () => {
	const result = searchInsert([1, 3, 5, 6], 2);
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("testing searchInsert for test 3", () => {
	const result = searchInsert([1, 3, 5, 6], 7);
	const expected = 4;
	expect(result).toStrictEqual(expected);
});

test("testing searchInsert for test 4", () => {
	const result = searchInsert([1, 3, 5, 6], 1);
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

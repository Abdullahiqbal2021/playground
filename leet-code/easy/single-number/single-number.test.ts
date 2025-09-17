import { assertType, expect, test } from "vitest";

import { singleNumber } from "./single-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing singleNumber for test 1", () => {
	const result = singleNumber([2, 2, 1]);
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("testing singleNumber for test 2", () => {
	const result = singleNumber([4, 1, 2, 1, 2]);
	const expected = 4;
	expect(result).toStrictEqual(expected);
});

test("testing singleNumber for test 3", () => {
	const result = singleNumber([1]);
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

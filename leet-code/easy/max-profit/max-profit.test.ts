import { expect, test } from "vitest";

import { maxProfit } from "./max-profit.js";

test("testing maxProfit for test 1", () => {
	const result = maxProfit([7, 1, 5, 3, 6, 4]);
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
});

test("testing maxProfit for test 2", () => {
	const result = maxProfit([1, 2, 3, 4, 5]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
});

test("testing maxProfit for test 3", () => {
	const result = maxProfit([7, 6, 5, 4, 3, 1]);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
});

test("testing maxProfit for test 4", () => {
	const result = maxProfit([2, 1, 2, 0, 1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
});

test("testing maxProfit for test 5", () => {
	const result = maxProfit([2, 1, 2, 1, 0, 1, 2]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
});

test("testing maxProfit for test 6", () => {
	const result = maxProfit([2, 4, 1]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
});

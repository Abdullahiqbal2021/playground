import { expect, test } from "vitest";

import { addDigits } from "./add-digits.js";

test("testing addDigits for test 1", () => {
	const result = addDigits(38);
	const expected = 2 as const;
	expect(result).toStrictEqual(expected);
});

test("testing addDigits for test 2", () => {
	const result = addDigits(0);
	const expected = 0 as const;
	expect(result).toStrictEqual(expected);
});

test("testing addDigits for test 3", () => {
	const result = addDigits(9);
	const expected = 9 as const;
	expect(result).toStrictEqual(expected);
});

test("testing addDigits for test 4", () => {
	const result = addDigits(99);
	const expected = 9 as const;
	expect(result).toStrictEqual(expected);
});

test("testing addDigits for test 5", () => {
	const result = addDigits(12345);
	const expected = 6 as const;
	expect(result).toStrictEqual(expected);
});

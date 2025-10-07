import { assertType, expect, test } from "vitest";

import { squareRoot } from "./square-root.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing squareRoot for test 1", () => {
	const result = squareRoot(4);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for test 2", () => {
	const result = squareRoot(8);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for test 3", () => {
	const result = squareRoot(0);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for test 4", () => {
	const result = squareRoot(1);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for perfect squares", () => {
	const cases = [
		{ input: 4, expected: 2 },
		{ input: 9, expected: 3 },
		{ input: 16, expected: 4 },
		{ input: 25, expected: 5 },
		{ input: 100, expected: 10 },
		{ input: 1_000_000, expected: 1000 },
	];
	for (const { input, expected } of cases) {
		const result = squareRoot(input);
		expect(result).toStrictEqual(expected);
		type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
		assertType<TTrue>(true);
	}
});

test("testing squareRoot for non-perfect squares", () => {
	const cases = [
		{ input: 2, expected: 1 },
		{ input: 3, expected: 1 },
		{ input: 5, expected: 2 },
		{ input: 8, expected: 2 },
		{ input: 10, expected: 3 },
		{ input: 15, expected: 3 },
		{ input: 20, expected: 4 },
		{ input: 99, expected: 9 },
	];
	for (const { input, expected } of cases) {
		const result = squareRoot(input);
		expect(result).toStrictEqual(expected);
		type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
		assertType<TTrue>(true);
	}
});

test("testing squareRoot for small edge cases", () => {
	const cases = [
		{ input: 0, expected: 0 },
		{ input: 1, expected: 1 },
	];
	for (const { input, expected } of cases) {
		const result = squareRoot(input);
		expect(result).toStrictEqual(expected);
		type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
		assertType<TTrue>(true);
	}
});

test("testing squareRoot for large numbers", () => {
	const cases = [
		{ input: 10_000_000, expected: 3162 }, // sqrt(10^7) ≈ 3162.27
		{ input: 2_147_483_647, expected: 46340 }, // largest 32-bit int
	];
	for (const { input, expected } of cases) {
		const result = squareRoot(input);
		expect(result).toStrictEqual(expected);
		type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
		assertType<TTrue>(true);
	}
});

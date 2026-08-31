import { expect, test } from "vitest";

import { compose } from "./function-composition.js";

test("testing compose for test 1", () => {
	const fn = compose([(x) => x + 1, (x) => 2 * x]);
	const result = fn(4);
	const expected = 9 as const;
	expect(result).toStrictEqual(expected);
});

test("testing compose for test 2", () => {
	const fn = compose([(x) => 10 * x]);
	const result = fn(3);
	const expected = 30 as const;
	expect(result).toStrictEqual(expected);
});

test("testing compose for test 3", () => {
	const fn = compose([]);
	const result = fn(5);
	const expected = 5 as const;
	expect(result).toStrictEqual(expected);
});

test("testing compose for test 4", () => {
	const fn = compose([(x) => x * 2, (x) => x + 3]);
	const result = fn(1);
	const expected = 8 as const;
	expect(result).toStrictEqual(expected);
});

test("testing compose for test 5", () => {
	const fn = compose([(x) => x * x, (x) => x + 1, (x) => -x]);
	const result = fn(2);
	const expected = 1 as const;
	expect(result).toStrictEqual(expected);
});

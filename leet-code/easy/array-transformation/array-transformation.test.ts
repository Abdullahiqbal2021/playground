import { test, expect } from "vitest";

import { map } from "./array-transformation.js";

test("plus one", () => {
	const fn = (n: number) => n + 1;
	expect(map([1, 2, 3], fn)).toStrictEqual([2, 3, 4]);
});

test("plus index", () => {
	const fn = (n: number, i: number) => n + i;
	expect(map([1, 2, 3], fn)).toStrictEqual([1, 3, 5]);
});

test("constant return", () => {
	const fn = () => 42;
	expect(map([10, 20, 30], fn)).toStrictEqual([42, 42, 42]);
});

test("empty array", () => {
	const fn = (n: number) => n + 1;
	expect(map([], fn)).toStrictEqual([]);
});

import { test, expect } from "vitest";

import { filter } from "./filter-elements-from-array.js";

test("filters even numbers", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	const fn = (n: number) => n % 2 === 0;
	expect(filter(arr, fn)).toStrictEqual([2, 4, 6]);
});

test("filters numbers greater than index", () => {
	const arr = [0, 2, 1, 3, 4];
	const fn = (n: number, i: number) => n > i;
	expect(filter(arr, fn)).toStrictEqual([2]);
});

test("filters all numbers (always true)", () => {
	const arr = [1, 2, 3];
	const fn = () => true;
	expect(filter(arr, fn)).toStrictEqual([1, 2, 3]);
});

test("filters no numbers (always false)", () => {
	const arr = [1, 2, 3];
	const fn = () => false;
	expect(filter(arr, fn)).toStrictEqual([]);
});

test("filters numbers using both value and index", () => {
	const arr = [5, 10, 15, 20];
	const fn = (n: number, i: number) => n / (i + 1) >= 5;
	expect(filter(arr, fn)).toStrictEqual([5, 10, 15, 20]);
});

test("handles empty array", () => {
	const arr: number[] = [];
	const fn = (n: number) => n > 0;
	expect(filter(arr, fn)).toStrictEqual([]);
});

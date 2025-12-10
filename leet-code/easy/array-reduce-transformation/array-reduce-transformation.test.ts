// cSpell:words accum
import { test, expect } from "vitest";

import { reduce } from "./array-reduce-transformation.js";

test("sum of numbers", () => {
	const nums = [1, 2, 3, 4];
	const fn = (accum: number, curr: number) => accum + curr;
	expect(reduce(nums, fn, 0)).toBe(10);
});

test("product of numbers", () => {
	const nums = [1, 2, 3, 4];
	const fn = (accum: number, curr: number) => accum * curr;
	expect(reduce(nums, fn, 1)).toBe(24);
});

test("subtract numbers sequentially", () => {
	const nums = [10, 1, 2];
	const fn = (accum: number, curr: number) => accum - curr;
	expect(reduce(nums, fn, 15)).toBe(2); // 15-10=5, 5-1=4, 4-2=2
});

test("empty array returns init", () => {
	const nums: number[] = [];
	const fn = (accum: number, curr: number) => accum + curr;
	expect(reduce(nums, fn, 5)).toBe(5);
});

test("single element array", () => {
	const nums = [7];
	const fn = (accum: number, curr: number) => accum + curr;
	expect(reduce(nums, fn, 3)).toBe(10);
});

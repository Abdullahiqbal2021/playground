import { test, expect } from "vitest";

import { majorityElement } from "./majority-elements-2.js";

test("example 1", () => {
	const nums = [3, 2, 3];
	expect(majorityElement(nums)).toBe(3);
});

test("example 2", () => {
	const nums = [2, 2, 1, 1, 1, 2, 2];
	expect(majorityElement(nums)).toBe(2);
});

test("all same elements", () => {
	const nums = [5, 5, 5, 5];
	expect(majorityElement(nums)).toBe(5);
});

test("majority at the beginning", () => {
	const nums = [7, 7, 7, 3, 3];
	expect(majorityElement(nums)).toBe(7);
});

test("majority at the end", () => {
	const nums = [1, 1, 2, 2, 2, 2, 2];
	expect(majorityElement(nums)).toBe(2);
});

test("single element array", () => {
	const nums = [42];
	expect(majorityElement(nums)).toBe(42);
});

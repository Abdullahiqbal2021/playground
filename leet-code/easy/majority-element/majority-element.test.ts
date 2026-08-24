import { test, expect } from "vitest";

import { majorityElement } from "./majority-element.js";

test("example 1: simple majority", () => {
	const nums = [3, 2, 3];
	expect(majorityElement(nums)).toBe(3);
});

test("example 2: simple majority even count", () => {
	const nums = [2, 2, 1, 1, 1, 2, 2];
	expect(majorityElement(nums)).toBe(2);
});

test("all elements same", () => {
	const nums = [5, 5, 5, 5];
	expect(majorityElement(nums)).toBe(5);
});

test("odd length array with clear majority", () => {
	const nums = [1, 2, 1, 1, 3, 1, 4];
	expect(majorityElement(nums)).toBe(1);
});

test("majority at end", () => {
	const nums = [4, 4, 1, 4, 2, 4, 4];
	expect(majorityElement(nums)).toBe(4);
});

test("large majority spread", () => {
	const nums = [7, 7, 5, 7, 3, 7, 7, 2, 7];
	expect(majorityElement(nums)).toBe(7);
});

test("single element array", () => {
	const nums = [9];
	expect(majorityElement(nums)).toBe(9);
});

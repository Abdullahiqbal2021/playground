import { test, expect } from "vitest";

import { longestOnes } from "./max-consecutive-ones-3.js";

// Example 1
test("example 1", () => {
	const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
	const k = 2;
	expect(longestOnes(nums, k)).toBe(6);
});

// Example 2
test("example 2", () => {
	const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
	const k = 3;
	expect(longestOnes(nums, k)).toBe(10);
});

// All ones
test("all ones", () => {
	const nums = [1, 1, 1, 1, 1];
	const k = 2;
	expect(longestOnes(nums, k)).toBe(5);
});

// All zeros
test("all zeros", () => {
	const nums = [0, 0, 0, 0];
	const k = 2;
	expect(longestOnes(nums, k)).toBe(2);
});

// Mixed zeros and ones
test("mixed zeros and ones", () => {
	const nums = [1, 0, 1, 0, 1, 0, 1];
	const k = 1;
	expect(longestOnes(nums, k)).toBe(3);
});

// Edge case: empty array
test("empty array", () => {
	const nums: number[] = [];
	const k = 1;
	expect(longestOnes(nums, k)).toBe(0);
});

// Edge case: k=0 (cannot flip)
test("k=0", () => {
	const nums = [1, 0, 1, 1, 0, 1];
	const k = 0;
	expect(longestOnes(nums, k)).toBe(2);
});

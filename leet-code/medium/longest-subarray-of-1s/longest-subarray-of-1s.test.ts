import { expect, test } from "vitest";

import { longestSubarray } from "./longest-subarray-of-1s.js";

// LeetCode examples
test("two zeros - delete first zero to merge runs", () => {
	const result = longestSubarray([1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1]);
	expect(result).toBe(7);
});

test("zeros at both edges", () => {
	const result = longestSubarray([0, 1, 1, 1, 0]);
	expect(result).toBe(3);
});

// Edge cases
test("all 1s - must delete one element", () => {
	const result = longestSubarray([1, 1, 1, 1, 1]);
	expect(result).toBe(4);
});

test("all zeros - no 1s possible", () => {
	const result = longestSubarray([0, 0, 0]);
	expect(result).toBe(0);
});

test("single 1 - deleted, result is empty", () => {
	const result = longestSubarray([1]);
	expect(result).toBe(0);
});

test("single 0", () => {
	const result = longestSubarray([0]);
	expect(result).toBe(0);
});

test("delete the only zero joining two 1s", () => {
	const result = longestSubarray([1, 0, 1]);
	expect(result).toBe(2);
});

test("delete leading zero", () => {
	const result = longestSubarray([0, 1, 1, 1]);
	expect(result).toBe(3);
});

test("delete trailing zero", () => {
	const result = longestSubarray([1, 1, 1, 0]);
	expect(result).toBe(3);
});

test("alternating 1s and 0s", () => {
	const result = longestSubarray([1, 0, 1, 0, 1]);
	expect(result).toBe(2);
});

test("two 1s - delete one", () => {
	const result = longestSubarray([1, 1]);
	expect(result).toBe(1);
});

import { expect, test } from "vitest";

import { maxArea } from "./container-with-most-water.js";

test("calculates max area for normal example", () => {
	const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
	expect(result).toBe(49);
});

test("handles smallest valid input", () => {
	const result = maxArea([1, 1]);
	expect(result).toBe(1);
});

test("handles increasing heights", () => {
	const result = maxArea([1, 2, 3, 4, 5]);
	expect(result).toBe(6); // width(0,3)=3 * height=2 =6
});

test("handles decreasing heights", () => {
	const result = maxArea([5, 4, 3, 2, 1]);
	expect(result).toBe(6);
});

test("handles all equal heights", () => {
	const result = maxArea([4, 4, 4, 4]);
	expect(result).toBe(12); // width=3 * height=4
});

test("handles array with zeros", () => {
	const result = maxArea([0, 0, 0, 10]);
	expect(result).toBe(0);
});

test("handles mixed small and large values", () => {
	const result = maxArea([2, 3, 10, 5, 7, 8, 9]);
	expect(result).toBe(36); // width(2,6)=4 * height=9 =36
});

test("handles single element", () => {
	const result = maxArea([5]);
	expect(result).toBe(0);
});

test("handles empty array", () => {
	const result = maxArea([]);
	expect(result).toBe(0);
});

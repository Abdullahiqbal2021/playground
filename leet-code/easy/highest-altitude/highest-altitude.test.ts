import { expect, test } from "vitest";

import { largestAltitude } from "./highest-altitude.js";

test("handles example 1", () => {
	const result = largestAltitude([-5, 1, 5, 0, -7]);
	expect(result).toBe(1);
});

test("handles example 2", () => {
	const result = largestAltitude([-4, -3, -2, -1, 4, 3, 2]);
	expect(result).toBe(0);
});

test("all gains positive", () => {
	const result = largestAltitude([1, 2, 3, 4]);
	expect(result).toBe(10); // 0 -> 1 -> 3 -> 6 -> 10
});

test("all gains negative", () => {
	const result = largestAltitude([-1, -2, -3]);
	expect(result).toBe(0); // never goes above 0
});

test("mixed positive and negative", () => {
	const result = largestAltitude([3, -2, 5, -1]);
	// altitudes: 0, 3, 1, 6, 5 → max = 6
	expect(result).toBe(6);
});

test("single positive value", () => {
	const result = largestAltitude([5]);
	expect(result).toBe(5);
});

test("single negative value", () => {
	const result = largestAltitude([-5]);
	expect(result).toBe(0); // highest is the start (0)
});

test("starts with big negative but later positive", () => {
	const result = largestAltitude([-10, 20]);
	// altitudes: 0, -10, 10
	expect(result).toBe(10);
});

test("empty array returns 0", () => {
	const result = largestAltitude([]);
	expect(result).toBe(0);
});

import { expect, test } from "vitest";

import { uniqueOccurrences } from "./unique-number-of-occurrences.js";

test("example 1", () => {
	const result = uniqueOccurrences([1, 2, 2, 1, 1, 3]);
	expect(result).toBeTruthy();
});

test("example 2", () => {
	const result = uniqueOccurrences([1, 2]);
	expect(result).toBeFalsy();
});

test("example 3", () => {
	const result = uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]);
	expect(result).toBeTruthy();
});

test("all numbers occur once", () => {
	const result = uniqueOccurrences([5, 6, 7, 8]);
	expect(result).toBeFalsy(); // all frequencies = 1, not unique → but this is valid
});

test("two numbers with same frequency", () => {
	const result = uniqueOccurrences([1, 1, 2, 2]);
	expect(result).toBeFalsy(); // both occur 2 times
});

test("large positive and negative mix", () => {
	const result = uniqueOccurrences([-1, -1, 2, 2, 2, 3]);
	// counts: -1→2, 2→3, 3→1 → all unique
	expect(result).toBeTruthy();
});

test("single element array", () => {
	const result = uniqueOccurrences([100]);
	expect(result).toBeTruthy(); // frequency = 1 → unique
});

test("empty array", () => {
	const result = uniqueOccurrences([]);
	expect(result).toBeTruthy(); // no duplicates in frequencies
});

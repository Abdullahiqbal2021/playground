// https://leetcode.com/problems/guess-number-higher-or-lower/description/

import { expect, test } from "vitest";

import { guessNumber } from "./guess-number.js";

declare global {
	// eslint-disable-next-line no-var
	var guess: (num: number) => number;
}

const mockGuess =
	(pick: number) =>
	(num: number): number => {
		if (num > pick) return -1;
		if (num < pick) return 1;
		return 0;
	};

test("testing guessNumber for test 1", () => {
	globalThis.guess = mockGuess(6);
	expect(guessNumber(10)).toBe(6);
});

test("testing guessNumber for test 2", () => {
	globalThis.guess = mockGuess(1);
	expect(guessNumber(1)).toBe(1);
});

test("testing guessNumber for test 3", () => {
	globalThis.guess = mockGuess(1);
	expect(guessNumber(2)).toBe(1);
});

test("testing guessNumber for test 4", () => {
	globalThis.guess = mockGuess(2);
	expect(guessNumber(2)).toBe(2);
});

test("testing guessNumber for test 5", () => {
	globalThis.guess = mockGuess(2147483647);
	expect(guessNumber(2147483647)).toBe(2147483647);
});

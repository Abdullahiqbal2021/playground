// https://leetcode.com/problems/memoize/description/

import { expect, test } from "vitest";

import { memoize } from "./memoize.js";

test("returns the correct result for a memoized call", () => {
	const sum = (a: number, b: number) => a + b;
	const memoizedSum = memoize(sum);

	expect(memoizedSum(2, 3)).toBe(5);
});

test("does not call the underlying function again for repeated identical arguments", () => {
	let callCount = 0;
	const sum = (a: number, b: number) => {
		callCount += 1;
		return a + b;
	};
	const memoizedSum = memoize(sum);

	expect(memoizedSum(2, 3)).toBe(5);
	expect(memoizedSum(2, 3)).toBe(5);
	expect(callCount).toBe(1);
});

test("computes and caches separately for different arguments", () => {
	let callCount = 0;
	const sum = (a: number, b: number) => {
		callCount += 1;
		return a + b;
	};
	const memoizedSum = memoize(sum);

	expect(memoizedSum(1, 2)).toBe(3);
	expect(memoizedSum(4, 5)).toBe(9);
	expect(memoizedSum(1, 2)).toBe(3);
	expect(callCount).toBe(2);
});

test("memoizes a single-argument function", () => {
	let callCount = 0;
	const square = (a: number) => {
		callCount += 1;
		return a * a;
	};
	const memoizedSquare = memoize(square);

	expect(memoizedSquare(4)).toBe(16);
	expect(memoizedSquare(4)).toBe(16);
	expect(callCount).toBe(1);
});

test("memoizes a zero-argument function", () => {
	let callCount = 0;
	const constant = () => {
		callCount += 1;
		return 42;
	};
	const memoizedConstant = memoize(constant);

	expect(memoizedConstant()).toBe(42);
	expect(memoizedConstant()).toBe(42);
	expect(callCount).toBe(1);
});

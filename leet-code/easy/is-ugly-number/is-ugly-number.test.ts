import { expect, test } from "vitest";

import { isUgly } from "./is-ugly-number.js";

test("testing isUgly for test 1", () => {
	const result = isUgly(6);
	expect(result).toBeTruthy();
});

test("testing isUgly for test 2", () => {
	const result = isUgly(1);
	expect(result).toBeTruthy();
});

test("testing isUgly for test 3", () => {
	const result = isUgly(14);
	expect(result).toBeFalsy();
});

test("testing isUgly for test 4", () => {
	const result = isUgly(8);
	expect(result).toBeTruthy();
});

test("testing isUgly for test 5", () => {
	const result = isUgly(0);
	expect(result).toBeFalsy();
});

test("testing isUgly for test 6", () => {
	const result = isUgly(-6);
	expect(result).toBeFalsy();
});

test("testing isUgly for test 7", () => {
	const result = isUgly(30);
	expect(result).toBeTruthy();
});

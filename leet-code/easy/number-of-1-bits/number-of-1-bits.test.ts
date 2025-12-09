import { test, expect } from "vitest";

import { hammingWeight } from "./number-of-1-bits.js";

test("example 1: n = 11", () => {
	// 1011 → 3 set bits
	expect(hammingWeight(11)).toBe(3);
});

test("example 2: n = 128", () => {
	// 10000000 → 1 set bit
	expect(hammingWeight(128)).toBe(1);
});

test("example 3: n = 2147483645", () => {
	// 1111111111111111111111111111101 → 30 set bits
	expect(hammingWeight(2147483645)).toBe(30);
});

test("n = 0", () => {
	expect(hammingWeight(0)).toBe(0);
});

test("n = 1", () => {
	expect(hammingWeight(1)).toBe(1);
});

test("random small: n = 7", () => {
	// 111 → 3 set bits
	expect(hammingWeight(7)).toBe(3);
});

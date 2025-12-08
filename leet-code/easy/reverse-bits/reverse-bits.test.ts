import { test, expect } from "vitest";

import { reverseBits } from "./reverse-bits.js";

test("reverses 0 correctly", () => {
	expect(reverseBits(0)).toBe(0);
});

test("reverses 1 correctly", () => {
	expect(reverseBits(1)).toBe(2147483648);
});

test("reverses 43261596 correctly", () => {
	expect(reverseBits(43261596)).toBe(964176192);
});

test("reverses 4294967293 correctly", () => {
	expect(reverseBits(4294967293)).toBe(3221225471);
});

test("reverses max 32-bit unsigned int", () => {
	expect(reverseBits(4294967295)).toBe(4294967295);
});

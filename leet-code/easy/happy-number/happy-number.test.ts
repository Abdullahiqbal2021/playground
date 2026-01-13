import { test, expect } from "vitest";

import { isHappy } from "./happy-number.js";

test("example: n = 19 (happy number)", () => {
	expect(isHappy(19)).toBeTruthy();
});

test("non-happy number: n = 2", () => {
	expect(isHappy(2)).toBeFalsy();
});

test("n = 1 (already happy)", () => {
	expect(isHappy(1)).toBeTruthy();
});

test("another happy number: n = 7", () => {
	expect(isHappy(7)).toBeTruthy();
});

test("larger non-happy number: n = 20", () => {
	expect(isHappy(20)).toBeFalsy();
});

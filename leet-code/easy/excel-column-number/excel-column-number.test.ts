import { test, expect } from "vitest";

import { titleToNumber } from "./excel-column-number.js";

test("single letter columns", () => {
	expect(titleToNumber("A")).toBe(1);
	expect(titleToNumber("B")).toBe(2);
	expect(titleToNumber("Z")).toBe(26);
});

test("double letter columns", () => {
	expect(titleToNumber("AA")).toBe(27);
	expect(titleToNumber("AB")).toBe(28);
	expect(titleToNumber("AZ")).toBe(52);
	expect(titleToNumber("ZY")).toBe(701);
});

test("triple letter columns", () => {
	expect(titleToNumber("AAA")).toBe(703);
	expect(titleToNumber("ABC")).toBe(731);
	expect(titleToNumber("ZZZ")).toBe(18278);
});

test("random columns", () => {
	// cspell:disable-next-line
	expect(titleToNumber("FXSHRXW")).toBe(2147483647);
});

test("empty string returns 0", () => {
	expect(titleToNumber("")).toBe(0);
});

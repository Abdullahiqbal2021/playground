import { expect, test } from "vitest";

import { convertToTitle } from "./excel-column-title.js";

test("test 1: smallest input 1 → A", () => {
	const result = convertToTitle(1);
	const expected = "A";
	expect(result).toStrictEqual(expected);
});

test("test 2: input 26 → Z", () => {
	const result = convertToTitle(26);
	const expected = "Z";
	expect(result).toStrictEqual(expected);
});

test("test 3: input 27 → AA", () => {
	const result = convertToTitle(27);
	const expected = "AA";
	expect(result).toStrictEqual(expected);
});

test("test 4: input 28 → AB", () => {
	const result = convertToTitle(28);
	const expected = "AB";
	expect(result).toStrictEqual(expected);
});

test("test 5: input 52 → AZ", () => {
	const result = convertToTitle(52);
	const expected = "AZ";
	expect(result).toStrictEqual(expected);
});

test("test 6: input 53 → BA", () => {
	const result = convertToTitle(53);
	const expected = "BA";
	expect(result).toStrictEqual(expected);
});

test("test 7: input 701 → ZY", () => {
	const result = convertToTitle(701);
	const expected = "ZY";
	expect(result).toStrictEqual(expected);
});

test("test 8: input 702 → ZZ", () => {
	const result = convertToTitle(702);
	const expected = "ZZ";
	expect(result).toStrictEqual(expected);
});

test("test 9: input 703 → AAA", () => {
	const result = convertToTitle(703);
	const expected = "AAA";
	expect(result).toStrictEqual(expected);
});

test("test 10: random mid value 18278 → ZZZ", () => {
	const result = convertToTitle(18278);
	const expected = "ZZZ";
	expect(result).toStrictEqual(expected);
});

test("test 11: large input 2147483647 (INT_MAX)", () => {
	const result = convertToTitle(2147483647);
	// Verified expected Excel title for INT_MAX
	const expected = "FXSHRXW";
	expect(result).toStrictEqual(expected);
});

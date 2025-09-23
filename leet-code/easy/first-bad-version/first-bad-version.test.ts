import { expect, test } from "vitest";

import { firstBadVersion } from "./first-bad-version.js";

test("testing firstBadVersion for test 1", () => {
	const checker = firstBadVersion((n) => n >= 4);
	const result = checker(5);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 2", () => {
	const checker = firstBadVersion((n) => n >= 1);
	const result = checker(1);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 3: bad version is the last one", () => {
	const checker = firstBadVersion((n) => n >= 10);
	const result = checker(10);
	const expected = 10;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 4: only 1 version, and it's bad", () => {
	const checker = firstBadVersion((n) => n >= 1);
	const result = checker(1);
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 5: only 1 version, and it's good", () => {
	const checker = firstBadVersion((n) => n >= 2);
	const result = checker(1);
	const expected = 2; // since first bad is beyond 1
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 6: bad version is in the middle", () => {
	const checker = firstBadVersion((n) => n >= 50);
	const result = checker(100);
	const expected = 50;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 7: bad version is at the beginning", () => {
	const checker = firstBadVersion((n) => n >= 1);
	const result = checker(5);
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 8: bad version is at position 2", () => {
	const checker = firstBadVersion((n) => n >= 2);
	const result = checker(10);
	const expected = 2;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 9: large input, bad version at end", () => {
	const checker = firstBadVersion((n) => n >= 1000000);
	const result = checker(1000000);
	const expected = 1000000;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 10: large input, bad version at start", () => {
	const checker = firstBadVersion((n) => n >= 1);
	const result = checker(1000000);
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 11: large input, bad version in the middle", () => {
	const checker = firstBadVersion((n) => n >= 500000);
	const result = checker(1000000);
	const expected = 500000;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 12: all versions good (bad version beyond n)", () => {
	const checker = firstBadVersion((n) => n >= 101);
	const result = checker(100);
	const expected = 101;
	expect(result).toStrictEqual(expected);
});

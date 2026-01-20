import { expect, test } from "vitest";

import { containsNearbyDuplicate } from "./contains-duplicate-2.js";

test("testing containsNearbyDuplicate for test 1", () => {
	const result = containsNearbyDuplicate([1, 2, 3, 1], 3);
	const expected = true as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 2", () => {
	const result = containsNearbyDuplicate([1, 0, 1, 1], 1);
	const expected = true as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 3", () => {
	const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
	const expected = false as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 4", () => {
	const result = containsNearbyDuplicate([1, 2, 3, 4], 1);
	const expected = false as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 5", () => {
	const result = containsNearbyDuplicate([1, 1], 0);
	const expected = false as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 6", () => {
	const result = containsNearbyDuplicate([1, 1], 1);
	const expected = true as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 7", () => {
	const result = containsNearbyDuplicate([], 3);
	const expected = false as const;
	expect(result).toStrictEqual(expected);
});

test("testing containsNearbyDuplicate for test 7", () => {
	const result = containsNearbyDuplicate([99, 99], 3);
	const expected = true as const;
	expect(result).toStrictEqual(expected);
});

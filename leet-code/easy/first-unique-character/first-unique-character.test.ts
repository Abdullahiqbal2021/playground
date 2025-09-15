import { expect, test } from "vitest";

import { firstUniqChar } from "./first-unique-character.js";

test("testing firstUniqChar for test 1", () => {
	const result = firstUniqChar("leetcode"); // cSpell: disable-line
	const expected = 0;
	expect(result).toStrictEqual(expected);
});
test("testing firstUniqChar for test 2", () => {
	const result = firstUniqChar("loveleetcode"); // cSpell: disable-line
	const expected = 2;
	expect(result).toStrictEqual(expected);
});

test("testing firstUniqChar for test 3", () => {
	const result = firstUniqChar("aabb"); // cSpell: disable-line
	const expected = -1;
	expect(result).toStrictEqual(expected);
});

test("testing firstUniqChar for test 4", () => {
	const result = firstUniqChar("aadadaadz"); // cSpell: disable-line
	const expected = 8;
	expect(result).toStrictEqual(expected);
});

test("testing firstUniqChar for test 5", () => {
	const result = firstUniqChar("aadadaad"); // cSpell: disable-line
	const expected = -1;
	expect(result).toStrictEqual(expected);
});

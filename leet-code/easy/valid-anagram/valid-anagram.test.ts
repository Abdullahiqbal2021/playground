import { expect, test } from "vitest";

import { isAnagram } from "./valid-anagram.js";

test("testing isAnagram for test 1", () => {
	const result = isAnagram("anagram", "nagaram"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
});

test("testing isAnagram for test 2", () => {
	const result = isAnagram("rat", "car");
	const expected = false;
	expect(result).toStrictEqual(expected);
});

test("testing isAnagram for test 3", () => {
	const result = isAnagram("a", "a");
	const expected = true;
	expect(result).toStrictEqual(expected);
});

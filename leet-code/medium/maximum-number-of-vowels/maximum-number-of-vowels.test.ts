import { expect, test } from "vitest";
import { maxVowels } from "./maximum-number-of-vowels.js";

test("calculates max vowels for normal case", () => {
	expect(maxVowels("leetcode", 3)).toBe(2); // "lee" has 2 vowels
});

test("handles all vowels", () => {
	expect(maxVowels("aeiou", 2)).toBe(2);
});

test("handles no vowels", () => {
	expect(maxVowels("bcdfgh", 3)).toBe(0);
});

test("handles mixed vowels and consonants", () => {
	expect(maxVowels("abciiidef", 3)).toBe(3); // "iii" has 3 vowels
});

test("handles smallest input k=1", () => {
	expect(maxVowels("a", 1)).toBe(1);
	expect(maxVowels("b", 1)).toBe(0);
});

test("handles k equal to string length", () => {
	expect(maxVowels("aeiobcdf", 8)).toBe(4); // total vowels in full string
});

test("handles k greater than string length", () => {
	expect(maxVowels("abc", 5)).toBe(1); // whole string counted
});

test("handles single vowel", () => {
	expect(maxVowels("a", 1)).toBe(1);
});

test("handles string with repeated patterns", () => {
	expect(maxVowels("abcde".repeat(1000), 5)).toBe(2); // pattern repeats
});

// Very large input test case
test("handles very large string", () => {
	const largeStr = "a".repeat(50000) + "b".repeat(50000); // 100k length
	expect(maxVowels(largeStr, 50000)).toBe(50000); // first 50k are all vowels
});

test("handles very large alternating string", () => {
	const largeStr = "ab".repeat(50000); // 100k length
	expect(maxVowels(largeStr, 50000)).toBe(25000); // half are vowels
});

import { expect, test } from "vitest";

import { canBeTypedWords } from "./max-typeable-words.js";

test("test 1 — normal case", () => {
	const result = canBeTypedWords("hello world", "ad");
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("test 2 — multiple broken letters", () => {
	const result = canBeTypedWords("leet code", "lt");
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("test 3 — no broken letters", () => {
	const result = canBeTypedWords("this is fine", "");
	const expected = 3;
	expect(result).toStrictEqual(expected);
});

test("test 4 — all words broken", () => {
	const result = canBeTypedWords("abc def ghi", "abcdefghi");
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

test("test 5 — mixed letters, some words valid", () => {
	const result = canBeTypedWords("apple banana grape", "b");
	const expected = 2;
	expect(result).toStrictEqual(expected);
});

test("test 6 — repeated broken letters", () => {
	const result = canBeTypedWords("dad add sad", "d");
	const expected = 0;
	expect(result).toStrictEqual(expected);
});

test("test 7 — single word valid", () => {
	const result = canBeTypedWords("keyboard", "z");
	const expected = 1;
	expect(result).toStrictEqual(expected);
});

test("test 8 — case with spaces and repeated words", () => {
	const result = canBeTypedWords("hi hi hi", "x");
	const expected = 3;
	expect(result).toStrictEqual(expected);
});

import { expect, test } from "vitest";

import {
	buildList,
	deleteDuplicates,
	listToArray,
} from "./remove-duplicates-from-sorted-list.js";

test("remove duplicates from [1,1,2]", () => {
	const head = buildList([1, 1, 2]);
	const result = deleteDuplicates(head);
	const expected = [1, 2];
	expect(listToArray(result)).toStrictEqual(expected);
});

test("remove duplicates from [1,1,2,3,3]", () => {
	const head = buildList([1, 1, 2, 3, 3]);
	const result = deleteDuplicates(head);
	const expected = [1, 2, 3];
	expect(listToArray(result)).toStrictEqual(expected);
});

test("empty list should return []", () => {
	const head = buildList([]);
	const result = deleteDuplicates(head);
	const expected: number[] = [];
	expect(listToArray(result)).toStrictEqual(expected);
});

test("list with no duplicates stays same", () => {
	const head = buildList([1, 2, 3]);
	const result = deleteDuplicates(head);
	const expected = [1, 2, 3];
	expect(listToArray(result)).toStrictEqual(expected);
});

test("all duplicates like [1,1,1,1] -> [1]", () => {
	const head = buildList([1, 1, 1, 1]);
	const result = deleteDuplicates(head);
	const expected = [1];
	expect(listToArray(result)).toStrictEqual(expected);
});

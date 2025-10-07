import { expect, test } from "vitest";

import { mergeSortedLists } from "./merge-sorted-lists.js";

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Helper function to convert array → linked list
const arrayToList = (arr: number[]): ListNode | null => {
	if (arr.length === 0) return null;
	const dummy = new ListNode(0);
	let current = dummy;
	for (const num of arr) {
		current.next = new ListNode(num);
		current = current.next;
	}
	return dummy.next;
};

// Helper function to convert linked list → array
const listToArray = (head: ListNode | null): number[] => {
	const arr: number[] = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	return arr;
};

test("merges two non-empty sorted lists", () => {
	const list1 = arrayToList([1, 2, 4]);
	const list2 = arrayToList([1, 3, 4]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([1, 1, 2, 3, 4, 4]);
});

test("handles when one list is empty", () => {
	const list1 = arrayToList([]);
	const list2 = arrayToList([0]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([0]);
});

test("handles both lists empty", () => {
	const list1 = arrayToList([]);
	const list2 = arrayToList([]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([]);
});

test("handles single-element lists", () => {
	const list1 = arrayToList([1]);
	const list2 = arrayToList([2]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([1, 2]);
});

test("handles lists with duplicate values", () => {
	const list1 = arrayToList([1, 1, 1]);
	const list2 = arrayToList([1, 1]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([1, 1, 1, 1, 1]);
});

test("handles when all elements of one list are smaller", () => {
	const list1 = arrayToList([1, 2, 3]);
	const list2 = arrayToList([4, 5, 6]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("handles when all elements of one list are greater", () => {
	const list1 = arrayToList([4, 5, 6]);
	const list2 = arrayToList([1, 2, 3]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("handles alternating values", () => {
	const list1 = arrayToList([1, 3, 5]);
	const list2 = arrayToList([2, 4, 6]);
	const result = mergeSortedLists(list1, list2);
	expect(listToArray(result)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

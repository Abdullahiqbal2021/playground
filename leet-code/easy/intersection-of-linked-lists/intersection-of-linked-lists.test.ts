import { expect, test } from "vitest";

import { getIntersectionNode } from "./intersection-of-linked-lists.js";

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Helper: create linked list from array
const arrayToList = (arr: number[]): ListNode | null => {
	if (arr.length === 0) return null;
	const dummy = new ListNode(0);
	let curr = dummy;
	for (const n of arr) {
		curr.next = new ListNode(n);
		curr = curr.next;
	}
	return dummy.next;
};

// Helper: attach tail to a node
const attachTail = (head: ListNode | null, tail: ListNode | null) => {
	if (!head) return tail;
	let curr = head;
	while (curr.next) curr = curr.next;
	curr.next = tail;
	return head;
};

test("returns intersection node when lists intersect", () => {
	const intersect = arrayToList([8, 10, 12]);

	const listA = attachTail(arrayToList([3, 7]), intersect);
	const listB = attachTail(arrayToList([99, 1]), intersect);

	const result = getIntersectionNode(listA, listB);
	expect(result).toBe(intersect);
});

test("returns null when lists do not intersect", () => {
	const listA = arrayToList([1, 2, 3]);
	const listB = arrayToList([4, 5, 6]);

	const result = getIntersectionNode(listA, listB);
	expect(result).toBeNull();
});

test("returns intersection when one list is entirely shared", () => {
	const shared = arrayToList([1, 2, 3]);

	const listA = shared;
	const listB = shared;

	const result = getIntersectionNode(listA, listB);
	expect(result).toBe(shared);
});

test("handles when one list is empty", () => {
	const listA = null;
	const listB = arrayToList([1, 2, 3]);

	const result = getIntersectionNode(listA, listB);
	expect(result).toBeNull();
});

test("handles when both lists are empty", () => {
	const result = getIntersectionNode(null, null);
	expect(result).toBeNull();
});

test("handles intersection at last node only", () => {
	const intersect = new ListNode(5);

	const listA = attachTail(arrayToList([1, 2, 3]), intersect);
	const listB = attachTail(arrayToList([4]), intersect);

	const result = getIntersectionNode(listA, listB);
	expect(result).toBe(intersect);
});

test("handles single-node intersection", () => {
	const intersect = new ListNode(1);

	const listA = intersect;
	const listB = intersect;

	const result = getIntersectionNode(listA, listB);
	expect(result).toBe(intersect);
});

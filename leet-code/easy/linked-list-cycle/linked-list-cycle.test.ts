import { expect, test } from "vitest";

import { hasCycle } from "./linked-list-cycle.js";

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// ✅ helper to create linked list from array
const createLinkedList = (values: number[]): ListNode | null => {
	if (values.length === 0) return null;
	const head = new ListNode(values[0]);
	let current = head;
	for (let i = 1; i < values.length; i++) {
		const node = new ListNode(values[i]);
		current.next = node;
		current = node;
	}
	return head;
};

test("no cycle in [3,2,0,-4]", () => {
	const head = createLinkedList([3, 2, 0, -4]);
	expect(hasCycle(head)).toBeFalsy();
});

test("cycle at head (single node pointing to itself)", () => {
	const node = new ListNode(1);
	node.next = node; // ✅ self loop
	expect(hasCycle(node)).toBeTruthy();
});

test("no cycle single node [1]", () => {
	const node = new ListNode(1);
	expect(hasCycle(node)).toBeFalsy();
});

test("empty list", () => {
	expect(hasCycle(null)).toBeFalsy();
});

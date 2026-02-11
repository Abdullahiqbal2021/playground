import { test, expect } from "vitest";

import { isPalindrome } from "./palindrome-linked-list.js";

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Helper: Convert array → linked list
const arrayToList = (arr: number[]): ListNode | null => {
	if (arr.length === 0) return null;

	const head = new ListNode(arr[0]);
	let current = head;

	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}

	return head;
};

test("empty list returns true", () => {
	const head = arrayToList([]);
	expect(isPalindrome(head)).toBeTruthy();
});

test("single node list returns true", () => {
	const head = arrayToList([1]);
	expect(isPalindrome(head)).toBeTruthy();
});

test("even length palindrome", () => {
	const head = arrayToList([1, 2, 2, 1]);
	expect(isPalindrome(head)).toBeTruthy();
});

test("odd length palindrome", () => {
	const head = arrayToList([1, 2, 3, 2, 1]);
	expect(isPalindrome(head)).toBeTruthy();
});

test("not a palindrome (even length)", () => {
	const head = arrayToList([1, 2, 3, 4]);
	expect(isPalindrome(head)).toBeFalsy();
});

test("not a palindrome (odd length)", () => {
	const head = arrayToList([1, 2, 3, 4, 1]);
	expect(isPalindrome(head)).toBeFalsy();
});

test("two node palindrome", () => {
	const head = arrayToList([7, 7]);
	expect(isPalindrome(head)).toBeTruthy();
});

test("two node non-palindrome", () => {
	const head = arrayToList([7, 8]);
	expect(isPalindrome(head)).toBeFalsy();
});

test("test", () => {
	const head = arrayToList([1, 2, 2, 1]);
	expect(isPalindrome(head)).toBeTruthy();
});

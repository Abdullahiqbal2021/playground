// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export const deleteDuplicates = (head: ListNode | null) => {
	let node = head;
	while (node) {
		const nextNode = node.next;
		if (nextNode && node.val === nextNode.val) node.next = nextNode.next;
		else node = node.next;
	}
	return head;
};

// helper to build linked list
export const buildList = (arr: number[]): ListNode | null => {
	const dummy = new ListNode(0);
	let current = dummy;
	for (const num of arr) {
		current.next = new ListNode(num);
		current = current.next;
	}
	return dummy.next;
};

// helper to convert linked list back to array
export const listToArray = (head: ListNode | null): number[] => {
	const arr: number[] = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	return arr;
};

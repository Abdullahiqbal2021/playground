// https://leetcode.com/problems/intersection-of-two-linked-lists
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null,
) {
	const listA = new Set<ListNode>();

	while (headA) {
		listA.add(headA);
		headA = headA.next;
	}

	while (headB) {
		if (listA.has(headB)) {
			return headB;
		}
		headB = headB.next;
	}
	return null;
}

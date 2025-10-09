// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
export const hasCycle = (head: ListNode | null) => {
	let node = head;
	const nodeSet = new Set<ListNode>();
	while (node) {
		if (!nodeSet.has(node)) {
			nodeSet.add(node);
			node = node.next;
			continue;
		}
		return true;
	}
	return false;
};

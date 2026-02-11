// https://leetcode.com/problems/palindrome-linked-list/

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export const isPalindrome = (head: ListNode | null) => {
	if (!head) return true;
	let forwardVal = "";
	let reverseVal = "";

	let curr: ListNode | null = head;
	while (curr !== null) {
		forwardVal = forwardVal ? `${forwardVal}-${curr.val}` : String(curr.val);
		reverseVal = reverseVal ? `${curr.val}-${reverseVal}` : String(curr.val);
		curr = curr.next;
	}

	return forwardVal === reverseVal;
};

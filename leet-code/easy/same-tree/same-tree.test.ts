import { expect, test } from "vitest";

import { isSameTree } from "./same-tree.js";

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// Helper: Convert array (level order) → binary tree
const arrayToTree = (arr: (number | null)[]): TreeNode | null => {
	if (arr.length === 0 || arr[0] === null) return null;
	const root = new TreeNode(arr[0]);
	const queue: (TreeNode | null)[] = [root];
	let i = 1;

	while (queue.length > 0 && i < arr.length) {
		const node = queue.shift();
		if (!node) continue;

		const leftVal = arr[i];
		i += 1;
		if (leftVal !== undefined) {
			if (leftVal !== null) {
				node.left = new TreeNode(leftVal);
				queue.push(node.left);
			} else {
				node.left = null;
			}
		}

		const rightVal = arr[i];
		i += 1;
		if (rightVal !== undefined) {
			if (rightVal !== null) {
				node.right = new TreeNode(rightVal);
				queue.push(node.right);
			} else {
				node.right = null;
			}
		}
	}

	return root;
};

test("returns true for two identical simple trees", () => {
	const p = arrayToTree([1, 2, 3]);
	const q = arrayToTree([1, 2, 3]);
	expect(isSameTree(p, q)).toBeTruthy();
});

test("returns false for trees with different structure", () => {
	const p = arrayToTree([1, 2]);
	const q = arrayToTree([1, null, 2]);
	expect(isSameTree(p, q)).toBeFalsy();
});

test("returns false for trees with same structure but different values", () => {
	const p = arrayToTree([1, 2, 1]);
	const q = arrayToTree([1, 1, 2]);
	expect(isSameTree(p, q)).toBeFalsy();
});

test("returns true for two empty trees", () => {
	const p = arrayToTree([]);
	const q = arrayToTree([]);
	expect(isSameTree(p, q)).toBeTruthy();
});

test("returns false if one tree is empty and the other is not", () => {
	const p = arrayToTree([1]);
	const q = arrayToTree([]);
	expect(isSameTree(p, q)).toBeFalsy();
});

test("returns true for single-node trees with same value", () => {
	const p = arrayToTree([42]);
	const q = arrayToTree([42]);
	expect(isSameTree(p, q)).toBeTruthy();
});

test("returns false for single-node trees with different values", () => {
	const p = arrayToTree([1]);
	const q = arrayToTree([2]);
	expect(isSameTree(p, q)).toBeFalsy();
});

test("returns true for larger identical trees", () => {
	const p = arrayToTree([3, 9, 20, null, null, 15, 7]);
	const q = arrayToTree([3, 9, 20, null, null, 15, 7]);
	expect(isSameTree(p, q)).toBeTruthy();
});

test("returns false for larger trees differing by one value", () => {
	const p = arrayToTree([3, 9, 20, null, null, 15, 7]);
	const q = arrayToTree([3, 9, 20, null, null, 99, 7]);
	expect(isSameTree(p, q)).toBeFalsy();
});

// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

import { expect, test } from "vitest";

import { maxDepth } from "./depth-of-binary-tree.js";

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
		if (leftVal !== undefined && leftVal !== null) {
			node.left = new TreeNode(leftVal);
			queue.push(node.left);
		}

		const rightVal = arr[i];
		i += 1;
		if (rightVal !== undefined && rightVal !== null) {
			node.right = new TreeNode(rightVal);
			queue.push(node.right);
		}
	}

	return root;
};

test("returns 0 for an empty tree", () => {
	const root = arrayToTree([]);
	expect(maxDepth(root)).toBe(0);
});

test("returns 1 for a single node tree", () => {
	const root = arrayToTree([1]);
	expect(maxDepth(root)).toBe(1);
});

test("returns 3 for a balanced tree with a deep right subtree", () => {
	const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
	expect(maxDepth(root)).toBe(3);
});

test("returns 2 for a right-skewed tree", () => {
	const root = arrayToTree([1, null, 2]);
	expect(maxDepth(root)).toBe(2);
});

test("returns depth of the deepest branch in a left-skewed tree", () => {
	const root = arrayToTree([1, 2, null, 3, null, 4]);
	expect(maxDepth(root)).toBe(4);
});

test("returns the deeper branch when left and right subtrees have different depths", () => {
	const root = arrayToTree([1, 2, 3, 4, null, null, null, 5]);
	expect(maxDepth(root)).toBe(4);
});

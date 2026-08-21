// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

import { expect, test } from "vitest";

import { inOrderTraversal } from "./inorder-traversal.js";

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

		const leftVal = arr[i++];
		if (leftVal !== undefined && leftVal !== null) {
			node.left = new TreeNode(leftVal);
			queue.push(node.left);
		}

		const rightVal = arr[i++];
		if (rightVal !== undefined && rightVal !== null) {
			node.right = new TreeNode(rightVal);
			queue.push(node.right);
		}
	}

	return root;
};

test("returns empty array for an empty tree", () => {
	const root = arrayToTree([]);
	expect(inOrderTraversal(root)).toStrictEqual([]);
});

test("returns single value for a single-node tree", () => {
	const root = arrayToTree([1]);
	expect(inOrderTraversal(root)).toStrictEqual([1]);
});

test("returns leetcode example order for [1,null,2,3]", () => {
	const root = arrayToTree([1, null, 2, 3]);
	expect(inOrderTraversal(root)).toStrictEqual([1, 3, 2]);
});

test("returns leaf-to-root order for a left-skewed tree", () => {
	const root = arrayToTree([1, 2, null, 3]);
	expect(inOrderTraversal(root)).toStrictEqual([3, 2, 1]);
});

test("returns root-to-leaf order for a right-skewed tree", () => {
	const root = arrayToTree([1, null, 2, null, 3]);
	expect(inOrderTraversal(root)).toStrictEqual([1, 2, 3]);
});

test("preserves duplicate values in traversal order", () => {
	const root = arrayToTree([2, 1, 1]);
	expect(inOrderTraversal(root)).toStrictEqual([1, 2, 1]);
});

test("returns sorted order for a binary-search-tree-shaped tree", () => {
	const root = arrayToTree([5, 3, 8, 1, 4, 7, 9]);
	expect(inOrderTraversal(root)).toStrictEqual([1, 3, 4, 5, 7, 8, 9]);
});

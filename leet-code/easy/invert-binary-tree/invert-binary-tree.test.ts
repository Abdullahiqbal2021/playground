import { expect, test } from "vitest";

import { invertTree } from "./invert-binary-tree.js";

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

test("returns null for an empty tree", () => {
	const root = arrayToTree([]);
	expect(invertTree(root)).toBeNull();
});

test("returns the same single node for a single-node tree", () => {
	const root = arrayToTree([1]);
	const expected = arrayToTree([1]);
	expect(invertTree(root)).toStrictEqual(expected);
});

test("inverts a small tree (example [2,1,3])", () => {
	const root = arrayToTree([2, 1, 3]);
	const expected = arrayToTree([2, 3, 1]);
	expect(invertTree(root)).toStrictEqual(expected);
});

test("inverts a larger tree (example [4,2,7,1,3,6,9])", () => {
	const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
	const expected = arrayToTree([4, 7, 2, 9, 6, 3, 1]);
	expect(invertTree(root)).toStrictEqual(expected);
});

test("inverts a left-skewed tree into a right-skewed tree", () => {
	const root = arrayToTree([1, 2, null, 3]);
	const expected = arrayToTree([1, null, 2, null, 3]);
	expect(invertTree(root)).toStrictEqual(expected);
});

test("inverts a tree with only a right child", () => {
	const root = arrayToTree([1, null, 2]);
	const expected = arrayToTree([1, 2]);
	expect(invertTree(root)).toStrictEqual(expected);
});

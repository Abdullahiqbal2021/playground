import { test, expect } from "vitest";

import { isSymmetric, TreeNode } from "./symmetric-tree.js";

const buildTree = (
	val: number,
	left: TreeNode | null = null,
	right: TreeNode | null = null,
) => new TreeNode(val, left, right);

test("symmetric tree example 1", () => {
	const tree = buildTree(
		1,
		buildTree(2, buildTree(3), buildTree(4)),
		buildTree(2, buildTree(4), buildTree(3)),
	);
	expect(isSymmetric(tree)).toBeTruthy();
});

test("non-symmetric tree example 2", () => {
	const tree = buildTree(
		1,
		buildTree(2, null, buildTree(3)),
		buildTree(2, null, buildTree(3)),
	);
	expect(isSymmetric(tree)).toBeFalsy();
});

test("empty tree", () => {
	expect(isSymmetric(null)).toBeTruthy();
});

test("single node tree", () => {
	const tree = buildTree(1);
	expect(isSymmetric(tree)).toBeTruthy();
});

test("symmetric two-level tree", () => {
	const tree = buildTree(1, buildTree(2), buildTree(2));
	expect(isSymmetric(tree)).toBeTruthy();
});

test("non-symmetric two-level tree", () => {
	const tree = buildTree(1, buildTree(2), buildTree(3));
	expect(isSymmetric(tree)).toBeFalsy();
});

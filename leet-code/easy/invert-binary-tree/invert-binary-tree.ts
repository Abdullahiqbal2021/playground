// https://leetcode.com/problems/invert-binary-tree/

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

// function invertTree(root: TreeNode | null): TreeNode | null {}
export const invertTree = (root: TreeNode | null): TreeNode | null => {
	if (!root) return null;
	const leftNode = root.left;
	const rightNode = root.right;
	root.left = rightNode;
	root.right = leftNode;
	invertTree(leftNode);
	invertTree(rightNode);
	return root;
};

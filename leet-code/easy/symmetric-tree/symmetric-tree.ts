// https://leetcode.com/problems/symmetric-tree
export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export const isSymmetric = (root: TreeNode | null) => {
	return isMirror(root, root);
};

const isMirror = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
	if (!node1 && !node2) return true;
	if (!node1 || !node2) return false;
	return (
		node1.val === node2.val &&
		isMirror(node1.left, node2.right) &&
		isMirror(node1.right, node2.left)
	);
};

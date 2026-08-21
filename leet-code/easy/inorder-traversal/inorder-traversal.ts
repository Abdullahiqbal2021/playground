// https://leetcode.com/problems/binary-tree-inorder-traversal

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

// export const inOrderTraversal = (root: TreeNode | null): number[] => {
// 	if (!root) return [];

// 	const leftNodes = inOrderTraversal(root.left);
// 	const rightNodes = inOrderTraversal(root.right);

// 	return [...leftNodes, root.val, ...rightNodes];
// };

export const inOrderTraversal = (root: TreeNode | null): number[] => {
	if (!root) return [];
	const stack: TreeNode[] = [];
	const result: number[] = [];
	let current: TreeNode | null = root;

	while (stack.length > 0 || current) {
		while (current) {
			stack.push(current);
			current = current.left;
		}

		current = stack.pop() as TreeNode;
		result.push(current.val);
		current = current.right;
	}
	return result;
};

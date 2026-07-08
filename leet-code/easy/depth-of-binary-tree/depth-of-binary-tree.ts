// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
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
export const maxDepth = (root: TreeNode | null) => {
	if (!root) return 0;
	let depth = 0;
	const stack = [{ node: root, level: 1 }];

	while (stack.length) {
		const { node, level } = stack.pop() as (typeof stack)[number];
		depth = Math.max(depth, level);

		if (node.left) stack.push({ node: node.left, level: level + 1 });
		if (node.right) stack.push({ node: node.right, level: level + 1 });
	}
	return depth;
};

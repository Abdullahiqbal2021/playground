// https://leetcode.com/problems/intersection-of-two-arrays-ii

export const arrayIntersection = (nums1: number[], nums2: number[]) => {
	const res: number[] = [];
	outer: for (const element of nums1) {
		for (let j = 0; j < nums2.length; j++) {
			const match = nums2[j];
			if (element === match) {
				res.push(element);
				nums2.splice(j, 1);
				continue outer;
			}
		}
	}
	return res;
};

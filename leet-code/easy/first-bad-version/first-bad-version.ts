// https://leetcode.com/problems/first-bad-version/

export const firstBadVersion = (isBadVersion: (n: number) => boolean) => {
	return (n: number) => {
		let low = 0;
		let high = n;

		while (low <= high) {
			const mid = Math.floor((low + high) / 2);
			const badVersionBool = isBadVersion(mid);

			if (badVersionBool) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}
		return low;
	};
};

// export const firstBadVersion = (isBadVersion: (n: number) => boolean) => {
// 	return (n: number) => {
// 		return binarySearch(1, n, isBadVersion);
// 	};
// };

// const binarySearch = (
// 	low: number,
// 	high: number,
// 	isBadVersion: (n: number) => boolean,
// ) => {

// 	const mid = Math.floor((low + high) / 2);
// 	if (low > high) return low;
// 	if (isBadVersion(mid)) return binarySearch(low, mid - 1, isBadVersion);
// 	return binarySearch(mid + 1, high, isBadVersion);
// };

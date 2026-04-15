// https://leetcode.com/problems/sleep
export const sleep = async (interval: number) => {
	await new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, interval);
	});
};

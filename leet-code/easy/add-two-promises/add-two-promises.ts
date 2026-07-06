// https://leetcode.com/problems/add-two-promises/
type TP = Promise<number>;

export const addTwoPromises = async (promise1: TP, promise2: TP): TP => {
	const a = await promise1.then((res) => res);
	const b = await promise2.then((res) => res);
	return await Promise.resolve(a + b);
};

// export const addTwoPromises = async (promise1: TP, promise2: TP): TP => {
// 	const [a, b] = await Promise.all([promise1, promise2]);
// 	return a + b;
// };

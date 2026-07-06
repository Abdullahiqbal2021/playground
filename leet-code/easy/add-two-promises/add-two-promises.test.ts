// https://leetcode.com/problems/add-two-promises/description/
import { expect, test } from "vitest";

import { addTwoPromises } from "./add-two-promises.js";

test("resolves to the sum of two resolved promises", async () => {
	const result = await addTwoPromises(Promise.resolve(2), Promise.resolve(2));
	expect(result).toBe(4);
});

test("resolves to the sum when one value is negative", async () => {
	const result = await addTwoPromises(Promise.resolve(10), Promise.resolve(-12));
	expect(result).toBe(-2);
});

test("resolves after both promises settle, even with delays", async () => {
	const promise1 = new Promise<number>((resolve) => {
		setTimeout(() => {
			resolve(10);
		}, 50);
	});
	const promise2 = new Promise<number>((resolve) => {
		setTimeout(() => {
			resolve(-12);
		}, 30);
	});
	const result = await addTwoPromises(promise1, promise2);
	expect(result).toBe(-2);
});

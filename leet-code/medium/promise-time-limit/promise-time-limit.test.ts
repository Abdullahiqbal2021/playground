// https://leetcode.com/problems/promise-time-limit/description/

import { expect, test, vi } from "vitest";

import { timeLimit } from "./promise-time-limit.js";

type TFn = Parameters<typeof timeLimit>[0];

test("testing timeLimit for test 1", async () => {
	vi.useFakeTimers();

	const fn = async (n: number) => {
		await new Promise((resolve) => {
			setTimeout(resolve, 100);
		});
		return n * 2;
	};
	const limited = timeLimit(fn as unknown as TFn, 150);

	const promise = limited(5);
	await vi.advanceTimersByTimeAsync(100);

	await expect(promise).resolves.toBe(10);

	vi.useRealTimers();
});

test("testing timeLimit for test 2", async () => {
	vi.useFakeTimers();

	const fn = async (n: number) => {
		await new Promise((resolve) => {
			setTimeout(resolve, 100);
		});
		return n * 2;
	};
	const limited = timeLimit(fn as unknown as TFn, 50);

	const promise = limited(5);
	const assertion = expect(promise).rejects.toBe("Time Limit Exceeded");
	await vi.advanceTimersByTimeAsync(50);

	await assertion;

	vi.useRealTimers();
});

test("testing timeLimit for test 3", async () => {
	vi.useFakeTimers();

	const fn = async (a: number, b: number) => {
		await new Promise((resolve) => {
			setTimeout(resolve, 120);
		});
		return a + b;
	};
	const limited = timeLimit(fn as unknown as TFn, 150);

	const promise = limited(5, 10);
	await vi.advanceTimersByTimeAsync(120);

	await expect(promise).resolves.toBe(15);

	vi.useRealTimers();
});

test("testing timeLimit for test 4", async () => {
	vi.useFakeTimers();

	const fn = async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, 20);
		});
		throw new Error("Custom Error");
	};
	const limited = timeLimit(fn, 100);

	const promise = limited();
	const assertion = expect(promise).rejects.toThrow("Custom Error");
	await vi.advanceTimersByTimeAsync(20);

	await assertion;

	vi.useRealTimers();
});

test("testing timeLimit for test 5", async () => {
	vi.useFakeTimers();

	const fn = async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, 30);
		});
		return "done";
	};
	const limited = timeLimit(fn, 100);

	const promise = limited();
	await vi.advanceTimersByTimeAsync(30);

	await expect(promise).resolves.toBe("done");

	vi.useRealTimers();
});

// https://leetcode.com/problems/debounce/description/

import { expect, test, vi } from "vitest";

import { debounce } from "./debounce.js";

test("testing debounce for test 1", async () => {
	vi.useFakeTimers();

	const calls: number[] = [];
	const fn = (n: number) => calls.push(n);
	const debounced = debounce(fn, 50);

	debounced(5);
	await vi.advanceTimersByTimeAsync(50);

	expect(calls).toStrictEqual([5]);

	vi.useRealTimers();
});

test("testing debounce for test 2", async () => {
	vi.useFakeTimers();

	const calls: number[] = [];
	const fn = (n: number) => calls.push(n);
	const debounced = debounce(fn, 100);

	debounced(1);
	await vi.advanceTimersByTimeAsync(50);

	expect(calls).toStrictEqual([]);

	vi.useRealTimers();
});

test("testing debounce for test 3", async () => {
	vi.useFakeTimers();

	const calls: number[] = [];
	const fn = (n: number) => calls.push(n);
	const debounced = debounce(fn, 100);

	debounced(1);
	await vi.advanceTimersByTimeAsync(50);
	debounced(2);
	await vi.advanceTimersByTimeAsync(50);
	debounced(3);
	await vi.advanceTimersByTimeAsync(100);

	expect(calls).toStrictEqual([3]);

	vi.useRealTimers();
});

test("testing debounce for test 4", async () => {
	vi.useFakeTimers();

	const calls: number[][] = [];
	const fn = (...args: number[]) => calls.push(args);
	const debounced = debounce(fn, 30);

	debounced(1, 2, 3);
	await vi.advanceTimersByTimeAsync(30);

	expect(calls).toStrictEqual([[1, 2, 3]]);

	vi.useRealTimers();
});

test("testing debounce for test 5", async () => {
	vi.useFakeTimers();

	const calls: number[] = [];
	const fn = (n: number) => calls.push(n);
	const debounced = debounce(fn, 50);

	debounced(1);
	await vi.advanceTimersByTimeAsync(50);
	debounced(2);
	await vi.advanceTimersByTimeAsync(50);

	expect(calls).toStrictEqual([1, 2]);

	vi.useRealTimers();
});

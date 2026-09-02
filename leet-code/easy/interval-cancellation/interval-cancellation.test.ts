// https://leetcode.com/problems/interval-cancellation/description/

import { expect, test, vi } from "vitest";

import { cancellable } from "./interval-cancellation.js";

type TFn = Parameters<typeof cancellable>[0];

test("testing cancellable for test 1", () => {
	vi.useFakeTimers();

	const calls: number[] = [];
	const fn = (x: number) => calls.push(x * 2);

	const cancel = cancellable(fn as unknown as TFn, [4], 35);
	vi.advanceTimersByTime(190);
	cancel();
	vi.advanceTimersByTime(1000);

	const expected = [8, 8, 8, 8, 8, 8] as const;
	expect(calls).toStrictEqual(expected);

	vi.useRealTimers();
});

test("testing cancellable for test 2", () => {
	vi.useFakeTimers();

	const calls: string[] = [];
	const fn = () => calls.push("called");

	cancellable(fn, [], 100);

	const expected = ["called"] as const;
	expect(calls).toStrictEqual(expected);

	vi.useRealTimers();
});

test("testing cancellable for test 3", () => {
	vi.useFakeTimers();

	const calls: string[] = [];
	const fn = () => calls.push("called");

	const cancel = cancellable(fn, [], 20);
	cancel();
	vi.advanceTimersByTime(1000);

	const expected = ["called"] as const;
	expect(calls).toStrictEqual(expected);

	vi.useRealTimers();
});

test("testing cancellable for test 4", () => {
	vi.useFakeTimers();

	const calls: number[] = [];
	const fn = (a: number, b: number) => calls.push(a + b);

	const cancel = cancellable(fn as unknown as TFn, [2, 3], 50);
	vi.advanceTimersByTime(100);
	cancel();

	const expected = [5, 5, 5] as const;
	expect(calls).toStrictEqual(expected);

	vi.useRealTimers();
});

test("testing cancellable for test 5", () => {
	const cancel = cancellable(() => undefined, [], 50);

	expect(typeof cancel).toBe("function");
});

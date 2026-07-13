import { expect, test, vi } from "vitest";

import { cancellable } from "./timeout-cancellation.js";

const wait = async (ms: number) => {
	await new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});
};

test("returns a cancel function", () => {
	const fn = vi.fn();
	const cancel = cancellable(fn, [], 20);

	expect(cancel).toBeInstanceOf(Function);
});

test("calls fn with the given args after t ms when not cancelled", async () => {
	const fn = vi.fn((x: unknown) => (x as number) * 5);
	const cancel = cancellable(fn, [2], 20);

	await wait(50);
	cancel();

	expect(fn).toHaveBeenCalledTimes(1);
	expect(fn).toHaveBeenCalledWith(2);
});

test("does not call fn when cancelled before t ms elapses", async () => {
	const fn = vi.fn((x: unknown) => (x as number) ** 2);
	const cancel = cancellable(fn, [2], 100);

	await wait(50);
	cancel();

	await wait(70);
	expect(fn).not.toHaveBeenCalled();
});

test("passes multiple arguments to fn", async () => {
	const fn = vi.fn(
		(x1: unknown, x2: unknown) => (x1 as number) * (x2 as number),
	);
	const cancel = cancellable(fn, [2, 4], 30);

	await wait(60);
	cancel();

	expect(fn).toHaveBeenCalledTimes(1);
	expect(fn).toHaveBeenCalledWith(2, 4);
});

test("cancelling after fn has already executed has no effect", async () => {
	const fn = vi.fn((x: unknown) => (x as number) + 1);
	const cancel = cancellable(fn, [1], 20);

	await wait(40);
	expect(fn).toHaveBeenCalledTimes(1);

	cancel();
	await wait(20);
	expect(fn).toHaveBeenCalledTimes(1);
});

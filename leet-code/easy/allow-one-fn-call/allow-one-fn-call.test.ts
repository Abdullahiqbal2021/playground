import { test, expect, vi } from "vitest";

import { once } from "./allow-one-fn-call.js";

import type { TArgs, TJsonValue } from "./allow-one-fn-call.js";

test("calls function only once and returns correct result", () => {
	const fn = vi.fn((a: number, b: number, c: number): TJsonValue => a + b + c);
	const onceFn = once(fn as TArgs);

	expect(onceFn(1, 2, 3)).toBe(6);
	expect(onceFn(2, 3, 4)).toBeUndefined();
	expect(onceFn(5, 6, 7)).toBeUndefined();

	expect(fn).toHaveBeenCalledTimes(1);
});

test("works with different argument types", () => {
	const fn = vi.fn((a: unknown, b: unknown) => [a, b]);
	const onceFn = once(fn as TArgs);

	expect(onceFn("x", 10)).toStrictEqual(["x", 10]);
	expect(onceFn(true, null)).toBeUndefined();

	expect(fn).toHaveBeenCalledTimes(1);
});

test("subsequent calls always return undefined", () => {
	const fn = vi.fn(() => "hello");
	const onceFn = once(fn);

	expect(onceFn()).toBe("hello");
	expect(onceFn()).toBeUndefined();
	expect(onceFn()).toBeUndefined();

	expect(fn).toHaveBeenCalledTimes(1);
});

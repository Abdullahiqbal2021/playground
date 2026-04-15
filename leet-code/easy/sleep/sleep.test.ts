import { expect, test } from "vitest";

import { sleep } from "./sleep.js";

test("resolves after the given delay", async () => {
	const interval = 100;
	const start = Date.now();
	await sleep(interval);
	const elapsed = Date.now() - start;
	expect(elapsed).toBeGreaterThanOrEqual(interval);
});

test("resolves after a short delay", async () => {
	const interval = 50;
	const start = Date.now();
	await sleep(interval);
	const elapsed = Date.now() - start;
	expect(elapsed).toBeGreaterThanOrEqual(interval);
});

test("returns a promise", () => {
	const result = sleep(100);
	expect(result).toBeInstanceOf(Promise);
});

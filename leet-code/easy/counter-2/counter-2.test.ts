import { test, expect as vitestExpect } from "vitest";

import { createCounter } from "./counter-2.js";

test("increment increases the counter", () => {
	const counter = createCounter(5);
	vitestExpect(counter.increment()).toBe(6);
	vitestExpect(counter.increment()).toBe(7);
});

test("decrement decreases the counter", () => {
	const counter = createCounter(5);
	vitestExpect(counter.decrement()).toBe(4);
	vitestExpect(counter.decrement()).toBe(3);
});

test("reset sets the counter back to initial value", () => {
	const counter = createCounter(5);
	counter.increment();
	counter.increment();
	vitestExpect(counter.reset()).toBe(5);
	vitestExpect(counter.increment()).toBe(6);
});

test("increment and decrement work together", () => {
	const counter = createCounter(10);
	vitestExpect(counter.increment()).toBe(11);
	vitestExpect(counter.decrement()).toBe(10);
	vitestExpect(counter.decrement()).toBe(9);
	vitestExpect(counter.reset()).toBe(10);
});

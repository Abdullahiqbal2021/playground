import { test, expect } from "vitest";

import { argumentsLength } from "./length-of-arguments.js";

test("single argument", () => {
	expect(argumentsLength(5)).toBe(1);
});

test("multiple arguments", () => {
	expect(argumentsLength({}, null, "3")).toBe(3);
});

test("zero arguments", () => {
	expect(argumentsLength()).toBe(0);
});

test("mixed types", () => {
	expect(argumentsLength(1, "a", true, null, [1, 2], { x: 1 })).toBe(6);
});

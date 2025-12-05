import { test, expect as vitestExpect } from "vitest";

import { expect as myExpect } from "./to-be-or-not-to-be.js";

test("toBe returns true when values match", () => {
	vitestExpect(() => myExpect(5).toBe(5)).not.toThrow();
});

test("toBe throws error when values do not match", () => {
	vitestExpect(() => myExpect(5).toBe(3)).toThrow("Not Equal");
});

test("notToBe returns true when values do not match", () => {
	vitestExpect(() => myExpect(5).notToBe(3)).not.toThrow();
});

test("notToBe throws error when values match", () => {
	vitestExpect(() => myExpect(5).notToBe(5)).toThrow("Equal");
});

test("toBe with strings", () => {
	vitestExpect(() => myExpect("hello").toBe("hello")).not.toThrow();
	vitestExpect(() => myExpect("hello").toBe("world")).toThrow("Not Equal");
});

test("notToBe with null and undefined", () => {
	vitestExpect(() => myExpect(null).notToBe(undefined)).not.toThrow();
	vitestExpect(() => myExpect(null).notToBe(null)).toThrow("Equal");
});

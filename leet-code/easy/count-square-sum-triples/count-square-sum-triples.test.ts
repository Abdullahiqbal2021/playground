import { test, expect } from "vitest";

import { countTriples } from "./count-square-sum-triples.js";

test("example 1: n = 5", () => {
	expect(countTriples(5)).toBe(2);
});

test("example 2: n = 10", () => {
	expect(countTriples(10)).toBe(4);
});

test("smallest input: n = 1", () => {
	expect(countTriples(1)).toBe(0);
});

test("medium input: n = 15", () => {
	// (3,4,5), (4,3,5), (6,8,10), (8,6,10), (5,12,13), (12,5,13), (9,12,15), (12,9,15)
	expect(countTriples(15)).toBe(8);
});

test("larger input: n = 20", () => {
	// just checking it returns a positive number
	expect(countTriples(20)).toBeGreaterThan(0);
});

import { expect, test } from "vitest";

import { argumentsLength } from "./length-of-argument.js";

test("testing argumentsLength for test 1", () => {
	const result = argumentsLength();
	const expected = 0 as const;
	expect(result).toStrictEqual(expected);
});

test("testing argumentsLength for test 2", () => {
	const result = argumentsLength(5);
	const expected = 1 as const;
	expect(result).toStrictEqual(expected);
});

test("testing argumentsLength for test 3", () => {
	const result = argumentsLength({}, null, "3");
	const expected = 3 as const;
	expect(result).toStrictEqual(expected);
});

test("testing argumentsLength for test 4", () => {
	const result = argumentsLength(1, "a", true, null, [1, 2], { x: 1 });
	const expected = 6 as const;
	expect(result).toStrictEqual(expected);
});

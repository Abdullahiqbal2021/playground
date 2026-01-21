import { expect, test } from "vitest";

import { MyStack } from "./implement-stack-using-queues.js";

test("myStack test 1: push and top", () => {
	const stack = new MyStack();
	stack.push(1);
	stack.push(2);

	const result = stack.top();
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);
});

test("myStack test 2: pop", () => {
	const stack = new MyStack();
	stack.push(1);
	stack.push(2);

	const result = stack.pop();
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);
});

test("myStack test 3: empty false", () => {
	const stack = new MyStack();
	stack.push(1);

	const result = stack.empty();
	const expected = false as const;

	expect(result).toStrictEqual(expected);
});

test("myStack test 4: empty true", () => {
	const stack = new MyStack();

	const result = stack.empty();
	const expected = true as const;

	expect(result).toStrictEqual(expected);
});

test("myStack test 5: pop till empty", () => {
	const stack = new MyStack();
	stack.push(5);
	stack.pop();

	const result = stack.empty();
	const expected = true as const;

	expect(result).toStrictEqual(expected);
});

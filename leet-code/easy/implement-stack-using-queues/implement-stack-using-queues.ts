// https://leetcode.com/problems/implement-stack-using-queues
export class MyStack {
	private stack: number[];
	constructor(prevStack: number[] = []) {
		this.stack = prevStack;
	}

	push(x: number): void {
		this.stack = [...this.stack, x];
	}

	pop(): number {
		const el = this.stack.splice(-1, 1);
		return el[0] ?? -1;
	}

	top(): number {
		return this.stack[this.stack.length - 1] ?? -1;
	}

	empty(): boolean {
		return this.stack.length === 0;
	}
}

const obj = new MyStack();
obj.push(2);
console.log({
	obj,
});

var param_2 = obj.pop();
console.log({
	param_2,
});

var param_3 = obj.top();
var param_4 = obj.empty();
const arr = [12];

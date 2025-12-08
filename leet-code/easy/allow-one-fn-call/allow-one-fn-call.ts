export type TJsonValue =
	| null
	| boolean
	| number
	| string
	| TJsonValue[]
	| { [key: string]: TJsonValue };
export type TOnceFn = (...args: TJsonValue[]) => TJsonValue | undefined;

export type TArgs = (...args: TJsonValue[]) => TJsonValue;

export const once = (fn: TArgs): TOnceFn => {
	let called = false;
	return (...args) => {
		if (called) return;
		called = true;
		return fn(...args);
	};
};

export const findIndex = (haystack: string, needle: string) => {
	const arr = haystack.split(needle);
	if (arr.length > 1) {
		return arr[0]?.length;
	}
	return -1;
};

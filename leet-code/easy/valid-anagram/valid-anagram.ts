export const isAnagram = (s: string, t: string) => {
	if (s.length !== t.length) return false;
	return s.split("").sort().join("") === t.split("").sort().join("");
};

// const alphabets = [
// 	"a",
// 	"b",
// 	"c",
// 	"d",
// 	"e",
// 	"f",
// 	"g",
// 	"h",
// 	"i",
// 	"j",
// 	"k",
// 	"l",
// 	"m",
// 	"n",
// 	"o",
// 	"p",
// 	"q",
// 	"r",
// 	"s",
// 	"t",
// 	"u",
// 	"v",
// 	"w",
// 	"x",
// 	"y",
// 	"z",
// ];

// const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// export const validPalindrome = (str: string) => {
// 	let forwardStr = "";
// 	let reverseStr = "";
// 	for (const element of str) {
// 		const lowerCase = element.toLocaleLowerCase();
// 		if (alphabets.includes(lowerCase)) {
// 			forwardStr = `${forwardStr}${lowerCase}`;
// 			reverseStr = `${lowerCase}${reverseStr}`;
// 			continue;
// 		}

// 		if (numeric.includes(element)) {
// 			forwardStr = `${forwardStr}${element}`;
// 			reverseStr = `${element}${reverseStr}`;
// 		}
// 	}

// 	return forwardStr === reverseStr;
// };

export const validPalindrome = (str: string) => {
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gu, "");

	let reverseStr = "";
	for (const element of cleaned) {
		reverseStr = `${element}${reverseStr}`;
	}

	return cleaned === reverseStr;
};

// find the total hamming distance between all pairs of substring of length k
// abccc, k = 2 -> (ab, bc = 2) + (bc, cc = 1) + (cc, cc = 0) = 3
// abccc, k = 3 -> (abc, bcc = 2) + (bcc, ccc = 1) = 3
// aabbcc, k = 2 -> (aa, ab = 1) + (ab, bb = 1) + (bb, bc = 1) + (bc, cc = 1) = 4
function totalHammingDist(s, k) {
	// l = r-k+1, r = k - 1
	// sub1 is from [l,r], sub2: [l+1, r+1]
	let sum = 0;
	let l = 0; // r = k - 1 , sub1: [l, l+k-1], [l+1, l+k]

	while (l + k < s.length) {
		sum += hammingDist(s, l, l + k);
		l++;
	}
	return sum;
}

function hammingDist(str, start, end) {
	// sub1: [start, end-1], sub2: [start+1, end]
	let dist = 0;
	let i = start;
	while (i < end) {
		const char1 = str[i];
		const char2 = str[i + 1];
		if (char1 !== char2) dist++;
		i++;
	}
	return dist;
}

const testCases = [
	["abccc", 2],
	["abccc", 3],
	["aabbcc", 2],
];
testCases.forEach((testCase) => {
	const res = totalHammingDist(testCase[0], testCase[1]);
	console.log(res);
});

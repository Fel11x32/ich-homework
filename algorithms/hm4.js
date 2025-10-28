function kthMerge(A, B, k) {
	// k — 1-индекс
	let i = 0,
		j = 0,
		cnt = 0,
		last = null;
	while (i < A.length || j < B.length) {
		const takeA = j >= B.length || (i < A.length && A[i] <= B[j]);
		last = takeA ? A[i++] : B[j++];
		if (++cnt === k) return last;
	}
	return null;
}

function kthBinary(A, B, k) {
	// k — 1-индекс
	if (A.length > B.length) return kthBinary(B, A, k);
	const m = A.length,
		n = B.length;
	let lo = Math.max(0, k - n),
		hi = Math.min(k, m);

	while (lo <= hi) {
		const i = (lo + hi) >> 1; // сколько берем из A
		const j = k - i; // и из B

		const Aleft = i ? A[i - 1] : -Infinity;
		const Aright = i < m ? A[i] : Infinity;
		const Bleft = j ? B[j - 1] : -Infinity;
		const Bright = j < n ? B[j] : Infinity;

		if (Aleft <= Bright && Bleft <= Aright) return Math.max(Aleft, Bleft);
		if (Aleft > Bright) hi = i - 1;
		else lo = i + 1;
	}
	return null;
}

const A = [100, 112, 256, 349, 770];
const B = [72, 86, 113, 119, 265, 445, 892];
console.log(kthMerge(A, B, 7)); // 256
console.log(kthBinary(A, B, 7)); // 256

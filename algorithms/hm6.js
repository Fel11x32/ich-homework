function quickSortRec(arr) {
	if (arr.length <= 1) return arr.slice();

	const pivot = arr[(arr.length / 2) | 0];
	const less = [],
		equal = [],
		greater = [];

	for (const x of arr) {
		if (x < pivot) less.push(x);
		else if (x > pivot) greater.push(x);
		else equal.push(x);
	}
	return quickSortRec(less).concat(equal, quickSortRec(greater));
}

console.log(quickSortRec([5, 3, 8, 3, 2, 9, 1, 0, -4]));

function partition(arr, lo, hi) {
	const mid = lo + ((hi - lo) >> 1);
	// ставим pivot в конец
	[arr[mid], arr[hi]] = [arr[hi], arr[mid]];
	const pivot = arr[hi];

	let i = lo;
	for (let j = lo; j < hi; j++) {
		if (arr[j] <= pivot) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}
	[arr[i], arr[hi]] = [arr[hi], arr[i]];
	return i; // финальная позиция pivot
}

function quickSortIter(arr) {
	const stack = [[0, arr.length - 1]];
	while (stack.length) {
		const [lo, hi] = stack.pop();
		if (lo >= hi) continue;

		const p = partition(arr, lo, hi);

		const leftLen = p - 1 - lo;
		const rightLen = hi - (p + 1);
		if (leftLen > rightLen) {
			stack.push([lo, p - 1], [p + 1, hi]);
		} else {
			stack.push([p + 1, hi], [lo, p - 1]);
		}
	}
	return arr;
}

const a = [5, 3, 8, 3, 2, 9, 1, 0, -4];
console.log(quickSortIter(a));

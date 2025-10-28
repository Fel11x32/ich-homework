// Функция слияния двух отсортированных массивов
function merge(left, right) {
	let i = 0,
		j = 0;
	const result = [];

	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	// Добавляем остатки
	return result.concat(left.slice(i)).concat(right.slice(j));
}

// Рекурсивная функция сортировки слиянием
function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2, 2, 2, 2]));
console.log(mergeSort([9, 7, 5, 3, 1]));
console.log(mergeSort([5, 4, 3, 2, 1, 0]));
console.log(mergeSort([3, 1, 4, 1, 5, 9, 2]));

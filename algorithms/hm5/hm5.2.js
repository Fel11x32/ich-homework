const fs = require('fs');

// Чтение чисел из файла
function readSortedFile(path) {
	const text = fs.readFileSync(path, 'utf8');
	return text.replace(/,/g, ' ').split(/\s+/).filter(Boolean).map(Number);
}

// Слияние k отсортированных массивов
function mergeKSortedArrays(arrays) {
	if (arrays.length === 0) return [];
	let current = arrays.slice();

	while (current.length > 1) {
		const next = [];
		for (let i = 0; i < current.length; i += 2) {
			if (i + 1 < current.length) next.push(merge(current[i], current[i + 1]));
			else next.push(current[i]);
		}
		current = next;
	}
	return current[0];
}

function mergeSortedFiles(inputPaths, outputPath) {
	const lists = inputPaths.map(readSortedFile);
	const merged = mergeKSortedArrays(lists);
	fs.writeFileSync(outputPath, merged.join('\n'), 'utf8');
	console.log(`Файл сохранён: ${outputPath}`);
}

function letterFrequency(text) {
	const freq = {};
	const clean = text.toLowerCase().replace(/[^a-zäöüß]/g, '');

	for (const ch of clean) {
		freq[ch] = (freq[ch] || 0) + 1;
	}

	const sorted = Object.entries(freq)
		.sort((a, b) => b[1] - a[1])
		.map(([ch, count]) => ({ letter: ch, count }));

	return sorted;
}

const text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
`;

console.table(letterFrequency(text));

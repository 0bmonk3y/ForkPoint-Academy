function removeFirstOccurrence(str, searchstr) {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'fox jumps'));

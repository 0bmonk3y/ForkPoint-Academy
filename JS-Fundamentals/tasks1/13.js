function findWord(str, searchstr) {
	var index = new RegExp(searchstr,'g');
    var index = str.match(index);

	if (index === -1) {
		console.log('Not Found');
	}
	return searchstr + ' was found ' + index.length + ' time/s';
}

console.log(findWord("The quick brown fox jumps over the lazy dog", 'fox'));
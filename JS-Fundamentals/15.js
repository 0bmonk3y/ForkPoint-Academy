function endsWith(input, string) {
    var index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}
console.log(endsWith('ForkPoint assignment', 'assignment'));
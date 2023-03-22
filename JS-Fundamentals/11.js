function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

console.log(strip('test '));
console.log(strip(' test'));
console.log(strip(' test  '));
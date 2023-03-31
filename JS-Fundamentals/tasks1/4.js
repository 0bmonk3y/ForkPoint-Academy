function factors(num) {
    var array = []
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
        array.push(i)
        }
    }
    return array;
}
console.log(factors(1224));
function swap(n) {
    if (n.toString().length % 2 != 0) {
        return false;
    }

    var result = 0;
    var x = 1;
    
    while (n != 0) {
        var digitB = n % 10, // 4 // second cycle 12 % 10 == 2 // 1
            digitA = (n - digitB) / 10 % 10; // 3 //second cycle 1 // 0
        result += x * (10 * digitB + digitA); // 43 //second cycle 2100
        n = Math.floor(n / 100); // 12.43, after floor == 12 //second cycle 21
        x *= 100; // x == 100 // second cycle x == 10000
    } // end of first cycle // end of second cycle
    return result;
}

console.log(swap(1234));
console.log(swap(34));
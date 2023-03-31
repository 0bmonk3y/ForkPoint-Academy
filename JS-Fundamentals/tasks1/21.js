/* function isHappy(num) {
    let sum = [];
    let numString = num.toString().split('').map(Number);
    while (num > 0){
        
    }
for (let i = 0; i < numString.length; i++) {
    const element = numString[i];
    let elementSquare =  Math.pow(element, 2);
    sum.push(elementSquare);
    var result = sum.reduce((partialSum, a) => partialSum + a, 0);
    
    if (result === 1) {
        return result = true
    }
    else {
        counter++
        isHappy(sum, counter)
    }
}
return result;
}
console.log(numbers(23));
 */
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}
console.log(isHappy(1000000000002412551515612));
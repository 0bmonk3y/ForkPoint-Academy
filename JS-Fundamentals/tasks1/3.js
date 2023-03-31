function reverse(number) {
    number = number + "";
    return number.split("").reverse().join("");
}
console.log(Number(reverse(1000)));
function largerNumber(x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60){
        if (x === y){
            return "Numbers are the same value";
        }
        else if (x > y){
            return x;
        }
        else {
            return y;
        }
    }
    else {
        return "Numbers are not within range"
        }
    }
console.log(largerNumber(40, 58.6));
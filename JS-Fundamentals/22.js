function degreeType(angleA, angleB) {
   var sumAngles =  angleA + angleB;
   var angleC = 180 - sumAngles;
   if (angleC < 90){
    var type = "acute"
    return type;
   }
   else if (angleC == 90){
    var type = "right"
    return type;
   }
   else if (angleC > 90 && angleC < 180){
    var type = "obtuse"
    return type;
   }
    else {
        var type = "N/A"
        return type;
    }
}
console.log(degreeType(-360, -360))
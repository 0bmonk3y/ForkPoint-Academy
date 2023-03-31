var myColor = ["Red", "Green", "White", "Black"];
var red = myColor.shift().toString() + ",";

var redWrapper = document.createElement("div");
var coloursWrapper = document.createElement("span");

redWrapper.innerHTML = red;
coloursWrapper.innerHTML = myColor;
document.getElementById("text1").appendChild(redWrapper);
document.getElementById("text1").appendChild(coloursWrapper);

myColor.toString();
myColor.join();
myColor.join('+');


// document.getElementById("text1").innerHTML = myColor;
document.getElementById("text2").innerHTML = myColor;
document.getElementById("text3").innerHTML = myColor;
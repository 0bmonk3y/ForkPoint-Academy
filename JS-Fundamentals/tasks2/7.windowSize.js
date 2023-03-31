window.onresize = getSize;
window.onload = getSize;

function getSize () {
let w = window.innerWidth;
let h = window.innerHeight;

let p = document.getElementById('windowSize')
p.innerHTML = `${w} x ${h}`
console.log(w);
}
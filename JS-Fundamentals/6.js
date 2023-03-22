function getLargest(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
      alert(a);
    }
    if (b > a && b > c && b > d && b > e) {
      alert(b);
    }
    if (c > a && c > b && c > d && a > e) {
      alert(c);
    }
    if (d > a && d > b && d > c && d > e) {
      alert(d);
    }
    if (e > a && e > b && e > c && e > d) {
      alert(e);
    }
}
getLargest(2, 3, 4, 5, 1)  
console.log(3)
 
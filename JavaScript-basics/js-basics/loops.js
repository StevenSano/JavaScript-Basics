function randomNumber (z) {
	return Math.floor(Math.random() * z) + 1;
}
/*var i = 100;
while (i) {
	document.write( "<p>" + randomNumber(i) + "  </p>");
	i -= 1;
}*/

var j = 0;
var i = 0;
var s = "<body>O*A</body>";
do{
	i = 0;
	document.write("<h4>");
	while (i <= 10){
		document.write(randomNumber(10) + " ")
		i += 1;
	}
	document.write("</h4>");
	j += 1;
}while (j <= 10)
var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB () {
	return Math.floor(Math.random() * 256 ); 
}

function randCC (){
	red = randomRGB();
	green = randomRGB();
	blue = randomRGB();
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	console.log(rgbColor);
	html += '<div style="background-color:' + rgbColor + '"></div>';
}
var i = 0;
while (i++ < 1000)
	randCC();

document.write(html);
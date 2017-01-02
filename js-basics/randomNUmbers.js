//function random number from 1 to z
function alertRandomNumber (z) {
	var randomNumber = Math.floor(Math.random() * z) + 1;
	alert(randomNumber);
}

//anonymous function
var arn = function (z) {
	var randomNumber = Math.floor(Math.random() * z) + 1;
	alert(randomNumber);
};

alertRandomNumber(10);
arn(10);
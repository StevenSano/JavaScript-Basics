


/*var inStock = [ 
				'apples', 'eggs', 'milk', 'cookies', 'cheese', 
				'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 
				'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 
				'cucumber',
				];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

var search = "";
while (true){
	search = prompt("Search Store: \nPRESS \"Q\" TO QUIT");
	console.log(search);
	if (search == "Q"){
		break
	}else if (inStock.indexOf(search) > -1){
		print("We have " + search + " in stock!");
		break ; 
	}
}
*/

var playList = [
  ['m&m\'s', 'blink 182'],
  ['Soma', 'The Strokes'],
  ['Triumph', 'Wu-Tang'],
  ['Castle Made of Sand', 'Jimi Heindrix'],
  ['Shes Lost Control', 'Joy Division'],
  ['I Know Why The Caged Bird Sings', 'Binary Star'],
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i][0] + ' by: '+ list[i][1] +'</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);
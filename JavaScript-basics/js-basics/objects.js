var character = {
	name : "",
	hp : 0,
	skills : [],
	male : false,
	female : false,
	attack : 0,
	defence : 0,
};

var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

for (var prop in person) {
	console.log(prop, ': ', person[prop]);
}

var playList = [
  {Song: 'm&m\'s', Artist: 'blink 182'},
  {Song: 'Soma', Artist: 'The Strokes'},
  {Song: 'Triumph', Artist: 'Wu-Tang'},
  {Song: 'Castle Made of Sand', Artist: 'Jimi Heindrix'},
  {Song: 'Shes Lost Control', Artist: 'Joy Division'},
  {Song: 'I Know Why The Caged Bird Sings', Artist: 'Binary Star'},
];

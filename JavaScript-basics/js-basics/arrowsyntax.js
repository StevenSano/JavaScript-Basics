const square = x => x * x;

const cube = x => square(x) * x;

const divide = (x, y) =>  x / y;

const cprint = str => console.log(str);

const error = () => console.log("error");

cprint(cube(11));
cprint(divide(110,2));
error();
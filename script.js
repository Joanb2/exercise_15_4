//1
const hello = "Hello";
const world = "World!";

console.log(`${hello}, ${world}`);

//2

let multiply = (a = 1, b = 1) => (a * b);
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//3

function average(...numbers){
	return numbers.reduce((sum, next) => sum + next)
	/ numbers.length;
}

console.log(average(2, 6, 2, 2));
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


//4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
let [first, ...rest] = grades;

console.log(average(first, ...rest));


//5

let arr = [1, 4, 'Iwona', false, 'Nowak'];
let [numb1, numb2, firstName, bool, lastName] = arr; 
console.log(firstName, lastName);

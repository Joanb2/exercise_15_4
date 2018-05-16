"use strict";

//1
var hello = "Hello";
var world = "World!";

console.log(hello + ", " + world);

//2

var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//3

function average() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	return numbers.reduce(function (sum, next) {
		return sum + next;
	}) / numbers.length;
}

console.log(average(2, 6, 2, 2));
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(grades));

//5

var arr = [1, 4, 'Iwona', false, 'Nowak'];
var numb1 = arr[0],
    numb2 = arr[1],
    firstName = arr[2],
    bool = arr[3],
    lastName = arr[4];

console.log(firstName, lastName);

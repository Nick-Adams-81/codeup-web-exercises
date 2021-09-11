'use strict';

// es-6 example differences


// Exponent operator //

//es-5
console.log(Math.pow(2, 8));

//es-6
console.log(2 ** 8);

// let and const //

//es-5 variable declaration

var name1 = 'some name';

//es-6 let and const declaration

let name2 = 'some name';

const newName = 'some name';

// template strings //

//es-5 string concatenation
var num  = 5;
console.log('you are ' + num + ' years old');

//es-6 template literal w/ backticks
const age = 39;
console.log(`I am ${age} years old`)
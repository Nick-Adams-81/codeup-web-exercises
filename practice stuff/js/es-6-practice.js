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
console.log(`I am ${age} years old`);

// for of loop //

const list = [1, 2, 3, 4]
for(let element in list) {
    // will log the index of element in this list array
    // can also use const instead of let
    console.log(element);
}

// arrow functions //

//es-5 function
function sayHello(name) {
    return 'Hello ' + name + '!'
}
console.log(sayHello('nick'));

// es-6 arrow function
// parenthesis can be omitted w/ single argument
const hello = name => `Hello ${name}!`
console.log(hello('Nick'));

// object property assignment

//es-5
var name3 = 'codeup';
var person = {
    name: name3,
    age: 5
}
console.log(person);

//es-6
const name4 = 'codeup';
const people = {
    name4,
    age: 9
}
console.log(people);



'use strict';

// warm up
function rolledSixSided(number) {
    for(var i = 0; i < number; i++) {
       var num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
       console.log(num);
    }

}
rolledSixSided(10);


// Math methods //

//Math.random will give you a random number

console.log(Math.random());

// how to get a random number in a specified range with Math.floor and Math.random
var max = 10;
var min = 2;
console.log(Math.floor(Math.random() * (max - min + min) + min));

//Math.round function rounds the decimal to nearest value
console.log(Math.round(4.5));

// Math.floor rounds a number down

console.log(Math.floor(4.9));

// Math.ceil rounds a number up
console.log(Math.ceil(4.2));

// Math.pow returns the base to the exponent power(2, 16) returns 65536

console.log(Math.pow(2, 16));

// Math.sqrt returns the square root of a number

console.log(Math.sqrt(9));
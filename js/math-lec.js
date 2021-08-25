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

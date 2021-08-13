'use strict';
// define a function and immediately invoke (i.e. call) it
(function() {

// src test
console.log('hello functions');

// defining of a named function in js
function sayHello() {
    console.log('Hello world!');
}
//calling the named function
sayHello();

// defining an anonymous function in js
var sayHowdy = function() {
    console.log('Howdy!');
}
// Calling the anonymous function
sayHowdy();

// arguments and parameters(add)
function add(num1, num2) {
    return num1 + num2;
}
//logging the add function
console.log('added (3, 5) = ' + add(3, 5));

//args nd params(subtract)
function subtract(num1, num2) {
    return num1 - num2;
}
// logging the subtract function
console.log('subtracted (9 - 5) = ' + subtract(9, 5));

// ----- SCOPE ----- //

// --- Global Variables --- //
var instructor = 'Doug';
var day = 'Friday';

function tellTheDay() {
    return 'Tell ' + instructor + ' it is ' + day + '!';
}

function greeting() {
    // --- Local Variable --- //
    var username = 'Nick';
    return 'Hi ' + username;
}

//console.log(greeting());

function checkDay() {
    var day = 'Monday';
    return day;
}
console.log('it\'s ' + checkDay());

// Global vs local scope //
const PI = 3.14159;
function overrideGlobal() {
    var PI = 5;
    console.log('Overriding global Pi value to ' + PI);
}
overrideGlobal();
console.log(PI);
})();

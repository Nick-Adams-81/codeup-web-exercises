'use strict';

// console.log('hello from external.js');
// console.log('this is definitely working');
// alert("Welcome to my website!")
//
// var color = prompt('What is your favorite color?');
// alert('Awesome, ' + color + ' is my favorite color too!');
//
// var a = 3;
// var b = 5;
// var c = 1;
// var sum = (a + b + c) * 3;
// console.log(sum);

var google = 400;
var facebook = 350;
var amazon = 380;
var total = (google * 6) + (facebook * 10) + (amazon * 4);
console.log(total);

var classTotal = 0
var fullClassTotal = 27
var studentSchedule = ['Saturday', 'Sunday']
var classSchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
var canAttend = studentSchedule != classSchedule && fullClassTotal > classTotal;
console.log(canAttend)

var item = 1;
var productOffer = item > 2;
var premium = item >= 1;

console.log(productOffer, premium)



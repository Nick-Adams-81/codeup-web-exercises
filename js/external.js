'use strict';

console.log('hello from external.js');
console.log('this is definitely working');
alert("Welcome to my website!")

var color = prompt('What is your favorite color?');
alert('Awesome, ' + color + ' is my favorite color too!');

var a = 3;
var b = 5;
var c = 1;
var sum = (a + b + c) * 3;
console.log(sum);

var google = prompt('input your google pay');
var facebook = prompt('input your facebook pay');
var amazon = prompt('input your amazon pay');
var total = (google * 6) + (facebook * 10) + (amazon * 4);
console.log(total);

var classTotal = prompt('How many students are in the classroom?');
var fullClassTotal = prompt('whats the max number of students allowed in the classroom?');
var studentSchedule = ['Saturday', 'Sunday']
var classSchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
var canAttend = studentSchedule != classSchedule && fullClassTotal > classTotal;
console.log(canAttend);

var item = 1;
var productOffer = item > 2;
var premium = item >= 1;
console.log(productOffer, premium)


'use strict';

console.log('hello from external.js');
alert("Welcome to my website!");

var color = prompt('What is your favorite color?');
alert('Awesome, ' + color + ' is my favorite color too!');

var a = prompt('How long would you like to rent the Little Mermaid?');
var b = prompt('How long are you renting Brother Bear for?');
var c = prompt('Hercules huh? How many days are you renting it for?');
var sum = ((a * 3) + (b * 3) + (c * 3));
alert('Your total rental fees will be ' + sum + " bucks.");

var google = prompt('input your google pay');
var facebook = prompt('input your facebook pay');
var amazon = prompt('input your amazon pay');
var total = (google * 6) + (facebook * 10) + (amazon * 4);
alert('Your total pay is ' + total + ' bucks');

var classTotal = prompt('How many students are in the classroom?');
var fullClassTotal = prompt('whats the max number of students allowed in the classroom?');
var studentSchedule = ['Saturday', 'Sunday']
var classSchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
var canAttend = studentSchedule != classSchedule && fullClassTotal > classTotal;
console.log(canAttend);

var item = prompt('How many items are you buying?');
var productOffer = item > 2;
var premium = confirm('Are you a premium member?');
console.log(productOffer, premium);


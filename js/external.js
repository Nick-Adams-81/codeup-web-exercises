'use strict';

// console.log('hello from external.js');
// alert("Welcome to my website!");
//
// var color = prompt('What is your favorite color?');
// alert('Awesome, ' + color + ' is my favorite color too!');
//
// var a = prompt('How long would you like to rent the Little Mermaid?');
// var b = prompt('How long are you renting Brother Bear for?');
// var c = prompt('Hercules huh? How many days are you renting it for?');
// var price = prompt('How much is the rental price per day?');
// var sum = ((a * price) + (b * price) + (c * price));
// alert('Your total rental fees will be $' + sum + ' bucks.');
//
// var google = prompt('input your google pay');
// var facebook = prompt('input your facebook pay');
// var amazon = prompt('input your amazon pay');
// var total = (google * 6) + (facebook * 10) + (amazon * 4);
// alert('Your total pay is ' + total + ' bucks');
//
// // Not sure this actually works, think I need to re-visit my approach
// var classTotal = prompt('How many students are in the classroom?');
// var fullClassTotal = prompt('whats the max number of students allowed in the classroom?');
// var studentSchedule = 'Saturday, Sunday';
// var classSchedule = 'Monday, Tuesday, Wednesday, Thursday, Friday';
// var canAttend = studentSchedule !== classSchedule && fullClassTotal > classTotal;
// console.log(canAttend);


// before re factor
// var productNum = 1;
// var offerExpired = true;
// var premiumMem = true;
// console.log('Customer qualifies for offer? ' + ((productNum > 2 || premiumMem) && offerExpired));

// after re factor
var productNum = prompt('How many items are on your cart?');
var premiumMem = confirm('Do tou have a premium membership?');
var offerExpired = confirm('Do we have a discount offer going today?');

alert('Customer qualifies for offer? ' + ((productNum > 2 || premiumMem) && offerExpired));

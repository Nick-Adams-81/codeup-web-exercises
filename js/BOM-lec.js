'use strict';

// clear interval
var count = 0;
var max = 10;
var interval = 100;

var intervalId = setInterval(function() {
    if(count >= max) {
        clearInterval(intervalId);
        console.log('we done!')
    } else {
        count++;
        console.log('repeating ' + count)
    }
}, interval);


// set timeout
var delay = 5000;
var timeout2 = setTimeout(function() {
    alert('this is a delayed hello!');
}, delay);
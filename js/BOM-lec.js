'use strict';

// set interval
var count = 0;
var max = 10;
var interval = 1000;

var intervalId = setInterval(function() {
    if(count >= max) {
        clearInterval(intervalId);
        console.log('we done!')
    } else {
        count++;
        console.log('repeating ' + count)
    }
}, interval);
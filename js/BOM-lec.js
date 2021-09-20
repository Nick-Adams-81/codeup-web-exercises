'use strict';

// set/clear interval
var count = 0;
var max = 10;


var intervalId = setInterval(function() {
    if(count >= max) {
        clearInterval(intervalId);
        console.log('we done!');
    } else {
        count++;
        console.log('repeating this line ' + count);
    }
}, 100);


// set/clear timeout
var delay = 5000;
var timeoutId = setTimeout(function() {
    alert('this is a delayed hello!');
}, delay);

// if we wanted to clear the set timeout above comment out the line below
// clearTimeout(timeoutId);

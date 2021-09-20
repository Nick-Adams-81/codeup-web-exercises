'use strict';


//TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times


// let count = 0;
//
// function showTime() {
//
//     // return new date and time
//     let dateTime = new Date();
//
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//
//     count += 1;
//
//     //if the count reaches 5, stop the program.
//     if(count >= 5) {
//         clearInterval(display);
//         console.log('last time stamp!');
//     }
//     console.log(time);
// }
//
// let display = setInterval(showTime, 1000);



//set/clear interval
var count2 = 0;
var max = 10;


var intervalId = setInterval(function() {
    if(count2 >= max) {
        clearInterval(intervalId);
        console.log('we done!');
    } else {
        count2++;
        console.log('repeating this line ' + count2);
    }
}, 100);


// set/clear timeout
var delay = 5000;
var timeoutId = setTimeout(function() {
    alert('this is a delayed hello!');
}, delay);


// if we wanted to clear the set timeout above uncomment the line below
// clearTimeout(timeoutId);

'use strict';

(function() {

    // looping through 50 numbers verifying the user inputted an odd number
    // this isnt working yet, further research is needed.
    var number = prompt('Please pick an odd number between 1 and 50');
    for(var i = 1; i < 50; i++) {
        if(number % 2 === 0) {
            alert('please pick an odd number');
            break;
        } else {
            alert('your number is ' + number);
            break;
        }

    }
    // looping through continuing past user input.
    console.log('Number to skip is: ' + number);
    for(var j = 1; j < 50; j++) {
        if(j % 2 === 0) {
            continue;
        } else if(j == number) {
            console.log('We\'re gonna skip this number: ' + j);
        } else {
            console.log('current number: ' + j);
        }

    }



})()
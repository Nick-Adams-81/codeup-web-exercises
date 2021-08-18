'use strict';

(function() {

    // looping through 50 numbers verifying the user inputted an odd number
    // this isnt working yet, further research is needed.
    var number = prompt('Please pick an odd number between 1 and 50');
    for(var i = 1; i < 50; i++) {
        while(number % 2 === 0) {
            var newNum = prompt('please pick an odd number');
            alert('your number is ' + newNum);
            break;
        } if(number % 2 !== 0) {
            alert('your number is ' + number);
            break;
        }

    }
    // looping through continuing past user input.
    for(var j = 1; j < 50; j++) {
        if(j % 2 === 0) {
            continue;

        }else if(j == number) {
            console.log('Wer\'e gonna skip this number: ' + j);
        } else {
            console.log('current number: ' + j);
        }

    }



})()
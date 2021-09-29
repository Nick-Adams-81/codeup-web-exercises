"use strict";

// key variables
var sound = new Audio('audio/cookie-down.mp3')

// correct konami code
var thirtyLives = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
// empty string to store user input
var code = '';

$(document).keyup(function(event){
    console.log(event.key)
    // adding user input to empty string for comparison to konami code
    code += event.key;
    // comparing user input string to correct konami code
    if(code === thirtyLives) {
        alert('You have added 30 lives!');
        $('body').css('background-color', 'green');
        $('h1').css('color', 'red');
        sound.play()
    }

});
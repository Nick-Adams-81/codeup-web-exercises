"use strict";

// sound variable
var sound = new Audio('audio/cookie-down.mp3');

// correct konami code
var thirtyLives = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
// empty string to store user input
var code = '';
document.documentElement.style.setProperty('--animate-duration', '.5s')
$(document).keyup(function(event){
    console.log(event.key);
    // adding user input to empty string for comparison to konami code
    code += event.key;
    // comparing user input string to correct konami code
    if(code === thirtyLives) {
        alert('You have added 30 lives!');
        $('body').css('background-color', 'green');
        $('h1').css('display', 'none');
        $('img').attr('src', 'https://i.ytimg.com/vi/N2ACMD_SJtA/maxresdefault.jpg').css('height', '200px').css('width', '200px');
        sound.play();
    }

});
"use strict";

// sound variable
var sound = new Audio('audio/cookie-down.mp3');
$('#btn-2').css('display', 'none');
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
        $('body').css('background-color', 'black');
        $('h1').css('display', 'none');
        $('img').attr('src', 'https://dreamteck.io/images/blog/upld/mitko_contra_example.jpg').css('height', '600px').css('width', '100%').attr('class', 'animate__animated animate__fadeInRight').css('--animate-duration', '2.5s');
        $('#btn-1').css('display', 'none');
        $('#btn-2').css('display', 'block').attr('class', 'animate__animated animate__fadeIn').css('--animate-duration', '2s');
        sound.play();
    }

});
'use strict';

(function() {
    // ---------- CONDITIONALS ---------- //

    // if statement //
    var isSunny = confirm('is it sunny today?');
    var hasSunScreen = confirm('do you have sunscreen?')
    // if(isSunny) {
    //     alert('Don\'t forget the sunscreen');
    // }

    // if/else statement //
    // if(isSunny) {
    //     alert('Bring your sunscreen');
    // } else {
    //     alert('No need for sunscreen today');
    // }

    // if/else if/else statement
    if(isSunny && hasSunScreen) {
        alert('Great! You brought sunscreen')
    } else if(isSunny && !hasSunScreen) {
        alert('Be careful, it\'s a sunny day! Don\'t get burnt!!!');
    } else {
        alert('it\'s not too sunny you will be fine!');
    }


})();
'use strict';

(function() {

    // multiplication table function

    function showMultiplicationTable(number) {
        for(var i = 0; i < number; i++) {
            console.log(number * i);
        }
    }

    showMultiplicationTable(6);


})()
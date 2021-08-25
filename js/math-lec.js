'use strict';

// warm up
function rolledSixSided(number) {
    for(var i = 0; i < number; i++) {
       var num = Math.floor(Math.random() * (6 - 1) + 1);
       console.log(num);
    }

}

rolledSixSided(6);

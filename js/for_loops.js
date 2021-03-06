'use strict';

(function() {

    // multiplication table function, logs the value of the inputted number by the iteration of the loop.
    function showMultiplicationTable(number) {
        for(var i = 1; i <= 10; i++) {
            console.log(number * i);
        }
    }
    console.log(showMultiplicationTable(7));

    // loop finding ten random numbers and tells us if that number is even or odd.

        for(var j = 1; j <= 10; j++) {
            // math.floor math.random variable setting min and max values to look for.
            var count = Math.floor(Math.random() * (200 - 20)) + 20;
            if(count % 2 === 0) console.log('Your number ' + count + ' is even');
            else console.log('Your number ' + count + ' is odd');
        }

        // loop that adds a symbol based on what iteration you are in.
        // complicated version

        for(var i = 1; i < 10; i++) {
            var output = "";

            for(var h = 0; h < i; h++) {
                output += i;
            }
            console.log(output);
        }

        // simpler version
        // for(var i = 1; i < 10; i++) {
        //     console.log(i.toString().repeat(i));
        //
        // }

        //for loop that counts down from 100 and skips every 5 numbers
        for(let i = 100; i > 0; i--) {
            if(i % 5 === 0) {
                console.log(i)
            }
        }

        
})()
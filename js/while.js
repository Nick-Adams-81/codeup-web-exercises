'use strict';

(function() {


    // var number = 1;
    // while(number <= 65536) {
    //    if(number % 2 === 0) console.log(number);
    //    number = number * 2;
    // }

    var conesToSell = Math.floor(Math.random() * 50) + 50;
    console.log('there are ' + conesToSell + ' left to sell');
    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        console.log('there\'s ' + conesSold + ' cones that have been sold');
        if(conesToSell >= conesSold) {
            conesToSell = conesToSell - conesSold;
             console.log('you have ' + conesToSell + ' more cones to sell');
        }
        if(conesSold > conesToSell) {
            console.log('I don\'t have that many cones to sell')

        }
    } while(conesToSell > 0);
    console.log('You sold all the cones');

})();
'use strict';

(function() {

    // initializin an array
    var pies = ['apple', 'cherry', 'key lime', 'banana', 'blueberry'];
    console.log(pies[1]);


    // pies[pies.length] = 'cream';
    console.log(pies);

    // push( adding element to end of an array)
    pies.push('orange');
    console.log(pies);

    // pop (deleting element from end of an array)
    pies.pop();
    console.log(pies);

    // shift (deleting element from beginning of an array)
    pies.shift();
    console.log(pies);

    // unshift (adding element to beginning of an array)
    pies.unshift('american');
    console.log(pies);

})()
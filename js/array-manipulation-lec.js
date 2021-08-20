'use strict';

(function() {

    // initializing an array
    var pies = ['apple', 'cherry', 'key lime', 'banana', 'blueberry', 'pistachio'];
    console.log(pies[1]);


    // pies[pies.length] = 'cream';
    console.log(pies);

    // push( adding element to end of an array)
    // pies.push('orange');
    // console.log(pies);

    // pop (deleting element from end of an array)
    // pies.pop();
    // console.log(pies);

    // shift (deleting element from beginning of an array)
    pies.shift();
    console.log(pies);

    // unshift (adding element to beginning of an array)
    pies.unshift('american');
    console.log(pies);

    // slice

    /* SYNTAX
    *  someArray.slice(startingIndex, endingIndex)
    * */

    // initializing a new array for slice testings
    // var arr = [1, 3, 5, 7, 9, 11];
    //
    // var newArr = arr.slice(2, 4);
    //
    // console.log(newArr);
    // console.log(arr);

    // function returning the last 3 elements in the pies array
    function lastThreeBakedPies(arr) {
            return arr.slice(-3);
    }

    console.log('The last 3 baked pies are ' + lastThreeBakedPies(pies));

    // sort function
    pies.sort();
    console.log(pies);

    // reverse function
    pies.reverse();
    console.log(pies);

    // split function
    var names = 'Bob Sally Mary';
    console.log(names);
    var namesArr = names.split(' ');
    console.log(namesArr);

    // join function
    var nameString = namesArr.join(', ');
    console.log(nameString);

    var bondsArray = ['Connery', 'Lazenby', 'Moore', 'Dalton', 'Brosnan', 'Craig'];
    // join function by hand
    var output = '';
    for(var i = 0; i < bondsArray.length; i++) {
        output += bondsArray[i];
        if(i !== bondsArray.length - 1) {
            output += ', '
        }
    }

    console.log(output);

    var phoneNumbers = '555-555-5555\n555-123-4567\n555-987-6543';

    var cleanPhoneNumbers = phoneNumbers.split('\n')
    console.log(cleanPhoneNumbers);

    cleanPhoneNumbers.forEach(function(phoneNumbers){
        var cleanedNumber = phoneNumbers.split('-').join('');
        console.log(cleanedNumber);
    })




})()
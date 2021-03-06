"use strict";


// ============================= Arrays Definition

/*
    In JS, an array is a special object data type that may contain
    a collection of multiple data types at numeric indices.

    In other words, an array allows us to store and access multiple values (elements)
    through one variable name (array name) and a specific index number.

        Array of animals...
         _______  _______  _______  _______
        |       ||       ||       ||       |
        |  DOG  ||  CAT  ||  EGG  ||  EMU  |
        |       ||       ||       ||       |
         -------  -------  -------  -------
         Index 0  Index 1  Index 2  Index 3

    Arrays may contain no defined elements, one, or many.

    Arrays in JS may contain elements of mixed types.

    Several array methods and properties are built in to JS to work with arrays.
*/

// ============================= Declaring/Initializing an Array with Array Literal Syntax

// empty arrays may be declared
// var pies = [];
// console.log(pies);
//
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
// console.log(pies);

// declaring and initializing a large array

var students = [
    "Student 1",
    "Student 2",
    "Student 3",
    "Student 4",
    "Student 5",
    "Student 6",
    "Student 7",
    "Student 8"
];
//
// console.log(students[0]);

// separate declaration and initialization

// var pies = [];
// pies[0] = "apple";
// pies[1] = "cherry";


// declaring and initializing a high index number
// pies[10] = "huckleberry";
// console.log(pies);



// ============================= Counting Array Items

// var pies = ["apple", "cherry", "key lime", "huckleberry"];
// var numberOfPies = pies.length;
// console.log(numberOfPies);


// ============================= Accessing Array Elements

//console.log(pies[100]);
// console.log(pies[3]);


// ============================= For Loop

/* SYNTAX

    for (var i = 0; i < someArray.length; i += 1) {
        console.log(someArray[i]);
    }

    - in the above context "someArray[i]" will access the next array element in each iteration

    - PROS: variety of traversals
    - CONS: more complicated syntax
    -  USE: when you need to iterate partially or backwards through an array

 */

// example

// for (var i = 0; i < pies.length; i += 1) {
//     console.log("I like " + pies[i]);
// }

// backwards

// for (var i = pies.length - 1; i >= 0; i -= 1) {
//     console.log("I like " + pies[i] + ' pie')
// }
//
// console.log(pies);




// ============================= Foreach Loop

/* SYNTAX

    someArray.forEach(function(element, index, array){
        console.log(element);
        console.log(index);
    });

    - PROS: simpler syntax
    - CONS: can only increment through entire array
    -  USE: when you need to iterate through entire array

    REMINDERS...
    - the parameters are optional to pass in to the anonymous function
    - parameters may be semantically named but order matters
 */


// standard syntax
var pies = ["apple", "cherry", "key lime", "huckleberry"];

//defining all three parameters
// pies.forEach(function(element, index, array){
//
//     console.log("Element " + element + " is at index " + index);
//     console.log(pies);
//     console.log(array);
//
// });


// with different parameter names
// pies.forEach(function(pie, index, array){
//
//     console.log("Element " + pie + " is at index " + index);
//     console.log(pies);
//     console.log(array);
//
// });


// with only one parameter

pies.forEach(function(pie){
    console.log("Element " + pie);
});


console.log("----------------");


//callback function syntax

function logElements(element, index, array) {
    console.log(element + ' is at index:' + index);
    console.log(array[0]);
}

pies.forEach(logElements);
students.forEach(logElements);


"use strict";
//
//~*~ While Loops ~*~
//

//are we there yet?
 var areWeThereYet;


// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation. While the condition is not true (!areWeThereYet), do some stuff (from the body of the loop)
// while(!areWeThereYet) {
//     areWeThereYet = confirm('Are we there yet?');
// }
 var haveToy = confirm("Can I have the toy, please?!");

 // Using this var inside a while loop
while(!haveToy) {
    haveToy = confirm('pleeeeeeaaaaaaaaase can I have the toy?');
}
if(haveToy) {
    alert('Thanks pops!');
}


// Notice that much like an if statement, our while loop will only run if the initial condition is met.
// If we give Codie the toy from the get go, we won't see the behavior in the loop at all.

// TODO: Quasar~ create a WHILE loop that runs as long as i is less than 10;

var i = 0;
while(i < 10) {
    console.log(i + ' is still not 10');
    i++;
}

if(i = 10) {
    console.log(i + " is ten!");
}
//test
//~*~ Do-While Loops ~*~


// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once
// [do this thing for sure this first time . . then check condition to continue VS. check condition . . will I do this thing at all?]

// do {
//  Code to be run.
// } while (condition)

// Consider:

// while (false) {
//     console.log("will you ever see me?");
// }
//
// do {
//     console.log("But what about me?");
// } while (false);

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time be for stopping.

// do while loop(do runs at least once while condition is not met)


// We can also use what we've learned above within the body of your functions:
function doTimesTwo(num) {
    do {
        num = num * 2;
        console.log(num);
    } while ( num < 100);
}

function whileTimesTwo(num) {
    while(num < 100) {
        num = num * 2;
        console.log(num);
    }

}

//var userNum = parseInt(prompt('Give me a number'));

// console.log(whileTimesTwo(userNum));
// console.log('---------------');
// console.log(doTimesTwo(userNum));
// For loops: Loops that are designed to run a given number of times. Think more math thinking.

for (var incrementer = 1; incrementer <= 10; incrementer++) {
    console.log("This loop has run " + incrementer + " time(s).");
}

// The for loop has more to it as you can see. Let's break down the arguments:

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.

// Once again, we can use this in a function.

function sayHello(num) {
    for(num; num >= 0; num--) {
        if(num % 5 === 0) {
            console.log('howdy! our current number is ' + num);
        } else {
            console.log('hello! our current number is ' + num);
        }
    }
}

//console.log(sayHello(16));


// And we can use this with conditionals!

// for (var i = 1; i <= 25; i++){
//     if (i % 6 === 0) console.log("Codeup");
//     else if (i % 2 === 0) console.log("Code");
//     else if (i % 3 === 0) console.log("Up");
//     else console.log(i);
// }

// TODO: Quasar, how would we refactor the above back into a WHILE loop as we saw earlier?
// var i = 1;
// while(i <= 25) {
//     if(i % 6 === 0) console.log('Codeup!');
//     else if(i % 2 === 0) console.log('Code');
//     else if(i % 3 === 0) console.log('Up');
//     else console.log(i);
//     i++;
// }
// Below is a funky example that works, but will rely on moving between different data types.
// for (var i = "A"; i.length < 8; i = i + "A") {
//     console.log("This is a bit of a tricky way to run a for loop, but hey, it works... this os what i looks like " + i);
// }

// We can get a loop to stop using break;

 //var x = 0;
//
// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 5) {
//         alert("LambChop, cut it out!!");
//         break;
//     }
// }


// for (var j = 5; j < 100000; j += 5) {
//     if (j === 25) {
//         break;
//     }
//     console.log(j);
// }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.


// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
    for (var i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
    return x;
}

// allOddNumbersToX(17);
// allOddNumbersToX(18);


// The above function will only log the odd numbers until the argument passed.
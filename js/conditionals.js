'use strict';

(function() {

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    function analyzeColor(string) {
        var msg;
        if(string === 'red') {
            msg = 'Strawberries are red';
        } else if(string === 'orange') {
            msg = 'The sun is orange';
        } else if(string === 'yellow') {
            msg = 'Yellow is bright';
        } else if(string === 'green') {
            msg = 'Green is my fav!!!';
        } else if(string === 'blue') {
            msg = 'Blue is the color of water';
        } else if(string === 'indigo') {
            msg = 'indigo? is that a real color?';
        } else if(string === 'violet') {
            msg = 'violet is basically purple';
        } else {
            msg = 'please pick a valid color';
        }
        return msg;

    }

     console.log(analyzeColor('red'));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    function analyzeColor2(str) {
        switch (str) {
            case 'red':
                alert('red is a cool color but not my fav');
                break;
            case 'orange':
                alert('orange is too bright for me...');
                break;
            case 'yellow':
                alert('yellow is the color of the sun');
                break;
            case 'green':
                alert('green is my fav!!!');
                break;
            case 'blue':
                alert('blue is the color of the sky');
                break;
            case 'indigo':
                alert('indigo? you mean purple?');
                break;
            case 'violet':
                alert('violet is a nice color');
                break;
            default:
                alert('pick a valid color please');
                break;

        }
    }

    analyzeColor2(randomColor)
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
     var userColor = prompt('pick your favorite color');
    analyzeColor2(userColor);
    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber, totalAmmount) {
        switch(luckyNumber) {
            case 0:
                return totalAmmount;
                break;
            case 1:
                return totalAmmount * 0.9;
                break;
            case 2:
                return totalAmmount * 0.75;
                break;
            case 3:
                return totalAmmount * 0.65;
                break;
            case 4:
                return totalAmmount * 0.5;
                break;
            case 5:
                return totalAmmount - totalAmmount;
                break;
        }

    }

    console.log(calculateTotal(0, 100)); // returns 100
    console.log(calculateTotal(4, 100)); // returns 50
    console.log(calculateTotal(5, 100)); // returns 0

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    var tabTotal = prompt('What is your total bill?');
     alert('Your lucky number is ' + luckyNumber + ', your price before discount is ' + tabTotal + ', your total after your ' +
         'lucky number draw is ' + calculateTotal(luckyNumber, tabTotal));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    //function  to check if the input is positive or negative
    function positiveOrNegative(x) {
        if(num >= 0) {
            alert('your number is positive');
        } else if(num < 0) {
            alert('your number is negative');
        } else {
            return;
        }
    }

    // function to add 100 to the inputted number
    function plusOneHundred(x) {
        alert('your number is ' + numPlusOneHundred + " when added with 100");
    }

    var numberConfirm = confirm('would you like to enter a number?');
    if(numberConfirm) {
       var num = prompt('please enter a number');
       var newNum = parseInt(num);
       var numPlusOneHundred = newNum + 100;
       if(isNaN(newNum)) {
           alert('That isn\'t a number');
       } else if(num % 2 === 0) {
           alert('your number is even');
           plusOneHundred(numPlusOneHundred);
           positiveOrNegative(num);
       } else {
           alert('your number is odd');
           plusOneHundred(numPlusOneHundred);
           positiveOrNegative(num);
       }
    } else {
        alert('please return to enter a number');
    }
})();
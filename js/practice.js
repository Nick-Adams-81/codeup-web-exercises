'use strict';
(function() {
    // return two
    function returnTwo() {
        return 2;
    }
    console.log(returnTwo());

    // say howdy
    function sayHowdy() {
        console.log('howdy!');
    }
    sayHowdy();

    // return name
    function returnName() {
        return 'Nick';
    }
    console.log(returnName());

    // add three
    function addThree(x) {
        return x + 3;
    }
    console.log(addThree(4));

    //say string
    function sayString(str) {
        return str;
    }
    console.log(sayString(('Codeup')));

    // identity
    function identity(input) {
        return input;
    }
    console.log(identity('nick'));

    // get random number
    function getRandomNumber(min, max) {
        var random = Math.floor((Math.random() * max) + 1);
        return random;
    }
    console.log(getRandomNumber(1, 7))

    // first
    function first(input) {
        for(var i = 0; i < input.length; i++) {
            return input[0]
        }
    }
    console.log(first('hello'))

    // last
    function last(input) {
        for(var i = input.length -1; i > 0; i--) {
            return input[i]
        }
    }
    console.log(last('please'));

    // first character removed
    function rest(input) {
       var string =  input.substring(1)
        return string
    }

    console.log(rest('world'));

    // reverse a string
    function reverse(input) {
        var revStr = input.split('').reverse().join('');
        return revStr;
    }

    console.log(reverse('hello'));

    // is numeric
    function isNumeric(input) {
        if(typeof input === 'number') {
            return true;
        } else {
            return false;
        }
    }

    console.log(isNumeric(9));

    // count
    function count(input) {
        for(var i = 0; i < input.length; i++) {
            return input.length;
        }
    }

    console.log(count('hi there'));

    // add(+ operator)
    function add(a, b) {
        return a + b;
    }

    console.log(add(6, 4));

    // subtract(- operator)
    function subtract(a, b) {
        return a - b;
    }

    console. log(subtract(7, 2));

    // multiply(* operator)
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(4, 7));

    // divide(/ operator)
    function divide(a, b) {
        return a / b;
    }
    console.log(divide(10, 2));

    // remainder(% operator)
    function remainder(number, divisor) {
        return number % divisor;
    }
    console.log(remainder(6, 5));

    // square
    function square(a) {
        return a * a;
    }
    console.log(square(4));
    // sum of squares using pre made functions
    function sumOfSquares(a, b) {
       return add(square(a), square(b));
    }
    console.log(sumOfSquares(4, 8));

    // do math(function takes in an operator with two numbers)
    function doMath(operator, a, b) {
        if(operator === '+'){
            return a + b;
        } else if(operator === '-') {
            return a - b;
        } else if(operator === '*') {
            return a * b;
        } else {
            return a / b;
        }
    }
    console.log(doMath('/', 8, 4));
    //console.log(2 * 2)




})()
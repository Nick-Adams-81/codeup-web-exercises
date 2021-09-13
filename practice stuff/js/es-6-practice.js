'use strict';

// es-6 example differences


// Exponent operator //

//es-5
console.log(Math.pow(2, 8));

//es-6
console.log(2 ** 8);

// let and const //

//es-5 variable declaration

var name1 = 'some name';

//es-6 let and const declaration

let name2 = 'some name';

const newName = 'some name';

// template strings //

//es-5 string concatenation
var num  = 5;
console.log('you are ' + num + ' years old');

//es-6 template literal w/ backticks
const age = 39;
console.log(`I am ${age} years old`);

// for of loop //

const list = [1, 2, 3, 4]
for(let element in list) {
    // will log the index of element in this list array
    // can also use const instead of let
    console.log(element);
}

// arrow functions //

//es-5 function
function sayHello(name) {
    return 'Hello ' + name + '!'
}
console.log(sayHello('nick'));

// es-6 arrow function
// parenthesis can be omitted w/ single argument
const hello = name => `Hello ${name}!`
console.log(hello('Nick'));

// object property assignment //

//es-5
var name3 = 'codeup';
var person = {
    name: name3,
    age: 5
}
console.log(person);

//es-6
const name4 = 'codeup';
const people = {
    name4,
    age: 9
}
console.log(people);

// object destructuring //

//es-5
var persons = {name:'nick', age:39};
var name = persons.name;
var age1 = persons.age;
console.log(name, age1);

//es-6
const people1 = {name5:'codeup', age2: 4};
const {name5, age2} = people1;
console.log(name5, age2);

// array destructuring

const arr = [1, 2, 3, 4, 5];
const[x, y] = arr;
console.log(x, y);


// array methods map, filter, and reduce //

// init variable to test map filter and reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map
const increment = numbers.map(num => num + 1);
console.log(increment);

// filter
const filteredNum = numbers.filter(num => num % 2 === 0);
console.log(filteredNum);

// reduce
const sum = numbers.reduce((total, currentNums) => {
    return total + currentNums;
}, 0);
console.log(sum);

// another reduce example
const salesPeeps = [
    {name: 'Nick', sold:100},
    {name: 'Doug', sold:50},
    {name: 'Eric', sold:225}
];

const totalSold = salesPeeps.reduce((total, person) => {
    return total + person.sold;
}, 0);
console.log(totalSold);

// another reduce example
const countWords = (input) => {
    const words = input.split(' ');
    return words.reduce((wordCount, word) => {
        if (typeof wordCount[word] === 'undefined') {
            wordCount[word] = 1;
        } else {
            wordCount[word] += 1
        }
        return wordCount
    }, {});
}
console.log(countWords('hello hello how are you today hello'));

//promises using the fetch API
fetch('https://api.github.com/users')
    //the response promise(.then)
    .then(res => console.log(res))
    //the second promise for error catching(.catch)
    .catch(err => console.error(err));


// object practice

let personA = {}
personA.name = 'Nick';
personA.age = 39;
personA.job = 'Web Dev';
console.log(personA);

let personB = {
    name: 'Jenny',
    age: 23,
    job: 'Waitress'
}

let personC = {
    name: 'Chris',
    age: 38,
    job: 'Poker Floor'
}

let newPeople = []

newPeople.unshift(personA, personB, personC);
console.log(newPeople);

newPeople.forEach(person => {
    console.log(person.name, person.job)
})




'use strict';

(function() {

    var me = {
        name: 'Nick Adams',
        where: 'Dallas, TX',
        age: '39'
    }

    me.isSingle = false;
    me.myCar = {
        make: 'Tesla',
        model: 3,
        year: 2019
    }


    var myGirl = {
            name: 'Jenny Marin',
            where: 'Dallas, TX',
            age: '22'
        }

    myGirl.job = 'Waitress';


    var myParents = {
        mother: {
            name: 'Terry Lev',
            age: 65,
            where: 'Sacramento, CA'
        },
        stepFather: {
            name: 'Joe Lev',
            age: 70,
            where: 'Sacramento, CA'
        }
    }

    myParents.mother.isRetired = true;
    myParents.mother.car = {
        make: 'Buick',
        model: 'LeSabre',
        year: 2007
    }

    myParents.stepFather.isRetired = false;

    var personArr = [];

    personArr.push(me);
    personArr.unshift(myGirl);
    //personArr.push(myParents);
     //console.log(personArr);
    //console.log(myParents.mother);

    personArr.forEach(function(person) {
        var main = document.querySelector('#main');
        var second = document.querySelector('#second');
        var text = document.createElement('h1');
        var text2 = document.createElement('p');
        text2.innerText = person.age;
        text.innerText = person.name;
        main.append(text);
        second.append(text2);
    });

    function add(a, b) {
        if(isNaN(parseInt(a)) || isNaN(parseInt(b))) return false;
         else return a + b;
    }

    function increment(input) {
        if(isNaN(parseInt(input))) return false;
        else return ++input;
    }

    function decrement(input) {
        if(isNaN(parseFloat(input))) return false;
        else return --input;
    }

    function isPalindrome(input) {
        if(typeof input !== 'string') return false;
        var forward = input.toLowerCase();
        var reverse = input.split('').reverse().join('').toLowerCase();
        return forward === reverse;
    }

    function revNumber(input) {
       input = input + ''
        return input.split('').reverse().join('')
    }

    function alphabetStr(input) {
      return input.split('').sort().join('')
    }

    // console.log(alphabetStr('Hello cruel'));
    // console.log(revNumber(12345));
    // console.log(add(1, 8));
    // console.log(increment('90'));
    // console.log(decrement(1));
    // console.log(isPalindrome('BoBbOb'));

   function test(num, len) {
        for(let i = 1; i <= len; i++) {
            console.log(num * [i])
        }
   }
    test(7, 5)
})();
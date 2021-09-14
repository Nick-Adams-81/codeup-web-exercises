'use strict';

(function () {

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

    personArr.forEach(function (person) {
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
        if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
            return false
        } else {
            return a + b;
        }
    }

    function square(input) {
        if (isNaN(parseInt(input))) {
            return false
        } else {
            return input * input
        }
    }

    function isPalindrome(input) {
        var forward = input.toLowerCase()
        var reverse = input.split('').reverse().join('').toLowerCase()
        return forward === reverse
    }

    console.log(square(5))
    console.log(add(4, 6))
    console.log(isPalindrome("BoBBob"))


    function test(num, len) {
        for (let i = 1; i <= len; i++) {
            console.log(num * [i])
        }
    }

    test(7, 5)


    // thursday warm up
    function tellFortune(children, partner, location, job) {
        // var children = prompt('How Many kids do you want?');
        // var partner = prompt('what\'s your spouses name?');
        // var location = prompt('Where do you live?');
        // var job = prompt('What do you do for work?');
        return 'You will have ' + children + ' kids, your partner\'s name will be ' + partner + ', you will live in ' + location + ' and your job will be ' + job + '.';
    }

    // friday warmup

    function dogYears(dogAge, humanAge) {
        if (isNaN(parseInt(dogAge)) || isNaN(parseInt(humanAge))) return false;
        var newDogAge = dogAge * 7;
        var humanAgeInDogYears = humanAge * 7;
        return 'Your doggie is ' + newDogAge + ' in human years and you are ' + humanAgeInDogYears + ' in doggie years!';

    }
    let hasTaco = ['blueberry', 'banana', 'yogurt', 'cereal', 'brisket and egg taco'];
    let noTaco = ['parfait', 'omelette', 'protein shake', 'fasting'];

    function tacoTuesday(input) {
        for(let i = 0; i < input.length; i++) {
            if(input[i].includes('taco')) {
                return true;
            }
        }
        return false;

    }

    console.log(tacoTuesday(hasTaco));
    console.log(tacoTuesday(noTaco));
    // console.log(dogYears('8', 39));
    // console.log(tellFortune(3, 'jenny', 'dallas', 'programmer'));
    // console.log('--------------------------------------------------');
    // console.log(tellFortune(5, 'carissa', 'sacramento', 'poker dealer'));
    // console.log('--------------------------------------------------');
    // console.log(tellFortune(0, 'i\'m single', 'hawaii', 'freeloader'));

})();
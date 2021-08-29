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

    var personArr = [];

    personArr.push(me)
    personArr.unshift(myGirl)
    personArr.push(myParents)
    console.log(personArr)
    console.log(me);

})()
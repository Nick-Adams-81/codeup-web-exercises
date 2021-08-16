'use strict';

(function() {
    // ---------- CONDITIONALS ---------- //

    // if statement //
    // var isSunny = confirm('is it sunny today?');
    // var hasSunScreen = confirm('do you have sunscreen?')
    // if(isSunny) {
    //     alert('Don\'t forget the sunscreen');
    // }

    // if/else statement //
    // if(isSunny) {
    //     alert('Bring your sunscreen');
    // } else {
    //     alert('No need for sunscreen today');
    // }

    // if, else-if, else statement
    // if(isSunny && hasSunScreen) {
    //     alert('Great! It\'s sunny and You brought sunscreen')
    // } else if(isSunny && !hasSunScreen) {
    //     alert('Be careful, it\'s a sunny day! Don\'t get burnt!!!');
    // } else {
    //     alert('it\'s not too sunny you will be fine!');
    // }

    // traffic light example(nested if statements) //

    // var trafficLight = prompt('What color is the traffic light?');
    // // making the user input all lowercase
    // trafficLight = trafficLight.toLowerCase()
    // if(trafficLight === 'red') {
    //     var blinking = confirm('Is the red light blinking?');
    //     if(blinking){
    //         alert('Red light is blinking');
    //     }
    //     alert("STOP!!! The light is red");
    // } else if(trafficLight === "yellow") {
    //     alert('careful the light is yellow');
    // } else if(trafficLight === 'green') {
    //     alert('The light is green you\'re good to go!!!');
    // } else {
    //     alert('the light is out mind your surroundings');
    // }

    // ternary operators (shorthand if/else) //

    (true) ? console.log('operation was successful') : console.log('Oops something went wrong');

    // Switch statements //

    var pizzaPref = prompt('What\'s your favorite pizza?');
    pizzaPref = pizzaPref.toLowerCase()
    switch(pizzaPref) {
        case 'pepperoni':
            alert('Pepperoni is my favorite too!!!');
            break;
        case 'cheese':
            alert('Cheese is pretty basic but cool!');
            break;
        case "chicken":
            alert('Nothing wrong with chicken!');
            break;
        default:
            alert(pizzaPref + ' isn\'t my fav but not judging');
            break;

    }





})();
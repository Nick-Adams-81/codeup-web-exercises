'use strict';

// random event listener
 var btn = document.getElementById('btn');
 btn.addEventListener('click', function() {
     alert('i got clicked')
 });

 // fetch api

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))





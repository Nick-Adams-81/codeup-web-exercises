'use strict'

$(document).ready(function () {

   $('h1').on('click', function() {
       $(this).css('background-color', 'blue')
   })

    $('p').on('dblclick', function() {
        $(this).css('font-size', '18px')
    })
});
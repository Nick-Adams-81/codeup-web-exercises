'use strict';

$(document).ready(function() {
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // get route from weathermap api
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APIID,
            q: "Dallas, US",
            units: "imperial"
        }).done(function (data) {
            console.log(data)
            var temp = data.main.temp
            var high = data.main.temp_max
            var low = data.main.temp_min
            $('#weather').html('current temp: ' + Math.round(temp) + '°')
            $('#high').html('High: ' + Math.round(high) + '°')
            $('#low').html('Low: ' + Math.round(low) + '°')
        })


    // mapbox set up
    mapboxgl.accessToken = mapboxApiKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 9.7,
        center: [-96.79107, 32.766540],
        dragRotate: true

    });
    // geocode function to get coordinates from user input
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }
    // click event using user input for mapbox api
    $('#submit').click(function(e) {
        e.preventDefault()
        var userData = $('#input').val();
        console.log(userData)

        geocode(userData, mapboxApiKey)
            .then(function(data) {
                 map.flyTo({center: data})
            })


    })
    // click event using user data for weathermap api
    $('#submit').click(function(e) {
        e.preventDefault()
        var input = $('#input').val()
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APIID,
            q: input,
            units: "imperial"
        }).done(function (data) {
            console.log(data)
            var temp = data.main.temp
            var high = data.main.temp_max
            var low = data.main.temp_min
            $('#weather').html('current temp: ' + Math.round(temp) + '°')
            $('#high').html('High: ' + Math.round(high) + '°')
            $('#low').html('Low: ' + Math.round(low) + '°')
        })
    })






})

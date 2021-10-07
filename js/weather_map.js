'use strict';

$(document).ready(function () {

    // function for converting the date to standard notation
    function parseDate(timestamp) {
        return new Date(timestamp * 1000).toLocaleDateString();
    }

    // function rendering the data in html
    function renderHtml(date, current, high, low) {
        var html = "<div class='card' style='width: 10rem'>" +
            "<div class='card-body'>" +
            "<div>" + date + "</div>" +
            "<h5>" + 'current: ' + Math.round(current) + '°' + "</h5>" +
            "<div>" + "high: " + Math.round(high) + '°' + "</div>" +
            "<div>" + 'low: ' + Math.round(low) + '°' + "</div>"
            + "</div>"
            + "</div>"

        $('.content').prepend(html)
    }

    // geocode function to get coordinates of user input
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                return data.features[0].center;
            });
    }


    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: 32.7763,
        lon: -96.7969,
        APPID: OPEN_WEATHER_APIID,
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        // var dailyTemp = data.daily
        //console.log(dailyTemp)
        var arr = []
        arr.push(data)
        //console.log(arr)

        arr.forEach(function (data, index) {
            //console.log(data.daily[0].dt)
            for (var i = data.daily.length - 1; i >= 0; i--) {
                //console.log(data.daily[i].temp)
                var date = parseDate(data.daily[i].dt)
                var temp = data.current.temp
                var high = data.daily[i].temp.max
                var low = data.daily[i].temp.min
                renderHtml(date, temp, high, low)
            }

        })

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


    // click event using user data for weathermap api
    $('#submit').click(function (e) {
        e.preventDefault()
        var input = $('#input').val()
        geocode(input, mapboxApiKey)
            .then(function (data) {
                // console.log(data)
                map.flyTo({center: data})
                // get route using geocode for lat and lon coordinates
                $.get('https://api.openweathermap.org/data/2.5/onecall', {
                    lat: data[1],
                    lon: data[0],
                    APPID: OPEN_WEATHER_APIID,
                    units: "imperial"
                }).done(function (newData) {
                    //console.log(newData.current.temp)
                    // creating a new variable storing the daily weather data
                    var dailyWeather = newData.daily
                    //console.log(dailyWeather)

                    // looping through daily weather to get data from api, had to loop backwards due to how the api sends its data
                    for (var i = dailyWeather.length - 1; i >= 0; i--) {
                        console.log(dailyWeather[i])
                        var date = parseDate(dailyWeather[i].dt)
                        var temp = newData.current.temp
                        var high = dailyWeather[i].temp.max
                        var low = dailyWeather[i].temp.min
                        renderHtml(date, temp, high, low)

                    }

                })
            })

    })


})

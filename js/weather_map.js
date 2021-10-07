'use strict';

$(document).ready(function () {
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: 32.7763,
        lon: -96.7969,
        APPID: OPEN_WEATHER_APIID,
        units: "imperial"
    }).done(function (data) {
        //console.log(data.daily)
        var temp = data.current.temp
        var high = data.daily[0].temp.max
        var low = data.daily[0].temp.min
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
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                return data.features[0].center;
            });
    }


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
                    // creating a new variable storing the daily weather data
                    var dailyWeather = newData.daily
                    console.log(dailyWeather)
                    // looping through our new data to display future forecast
                    dailyWeather.forEach(function (data) {
                        //console.log(data.temp)
                        // calling the current object from newData for current conditions
                        var temp = newData.current.temp
                        var high = data.temp.max
                        var low = data.temp.min
                        $('#weather').html('current temp: ' + Math.round(temp) + '°')
                        $('#high').html('High: ' + Math.round(high) + '°')
                        $('#low').html('Low: ' + Math.round(low) + '°')

                        var html = "<div class='card' style='width: 13rem'>" +
                            "<div class='card-body'>" +
                            "<h5>" + 'current temp: ' + Math.round(temp) + '°' +"</h5>" +
                            "<div>" + "high: " + Math.round(high) + '°' + "</div>" +
                            "<div>" + 'low: ' + Math.round(low) + '°' + "</div>"
                            + "</div>" +
                            +"</div>"

                        $('.content').append(html)
                        // < div
                        // className = "card"
                        // style = "width: 13rem;" >
                        //     < !--<img src="..." class="card-img-top" alt="...">-->
                        //         <div className="card-body">
                        //             <h5 className="card-title" id="weather"></h5>
                        //             <div id="high"></div>
                        //             <div id="low"></div>
                        //         </div>
                        //     </div>
                    })
                })
            })

    })


})

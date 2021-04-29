//we will use npm request for api calls
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast-request')

const url = 'http://api.weatherstack.com/current?access_key=a6b4b50e0f5f598c15243f7119eef1ce&query=Oslo';

const address = process.argv[2];
console.log(process.argv,"process")

// request({ url: url }, (error,response) => {
//    const data = JSON.parse(response.body);
//    console.log(data);
//
// });

// request({ url: url, json: true }, (error,response) => {
//     const data = JSON.parse(response.body);
//     if(error) console.log(error);
//     else if(response.body.error) console.log("response body error",response.body.error);
//     else console.log(data);
//
// });


//geocoding service

const geoCodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3l1bGl6IiwiYSI6ImNrbnN2bm9sdzA3djkybm54cjhqd21jYTgifQ.xuhvmhYc6GgubTzRKT4GHA&limit=1";

request({url:geoCodingUrl, json: true}, (error,response) => {
    if(error) console.log("low level error the error parameter exists")
    else if (response.body.features.length === 0 ) console.log("unable to find location.")
    else{
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude,longitude);
    }
});


if(!address){
    console.log('Please provide an address')
}else{
    geocode(address, (error, data) => {
        if(error){
            return console.log(error);
        }
        console.log('Error',error);
        console.log('Data',data)
        forecast(data.latitude,data.longitude, (error,forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(data.location);
            console.log(forecastData,"forecast data");

        })
    });
}


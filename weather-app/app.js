const request = require('request');
// request is an npm module for simplified http calls

// requests first arg is an options obj we can use to configure
// all sorts of info, the second is a callback
request({
// this is where we specify the things unique to our request:
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=3525+Greenway+Dr+Columbia&key=AIzaSyCoGDYkoW-dnm3Wf0e_gjxhlRlWs6awovo',
    json: true // convert the json string data returned and convert into an obj
}, (error, response, body) => {
// the callback is 'called' once the data gets back
// from the http endpoint
    console.log(body);
});
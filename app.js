const request = require("request")

const weatherUrl = "http://api.weatherstack.com/current?access_key=ccc2c04a37c1c3342d8da4cc9b44ce31&query=37.8267,-122.4233&units=f";

request({ url: weatherUrl, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
})

const geocodeURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam1vcmFsZXMxMTMiLCJhIjoiY2tkejd5aDVqMDdlMTJ6cDc0Mjloc204cyJ9.LyltzXMQZd7EfUY515UbqA&limit=1"

request( { url: geocodeURL, json: true}, (error, response) => {
    console.log(response.body.features[0].center)
})

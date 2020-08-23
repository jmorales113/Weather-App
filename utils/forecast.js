const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const forecastURL = `http://api.weatherstack.com/current?access_key=ccc2c04a37c1c3342d8da4cc9b44ce31&query=${latitude},${longitude}&units=f`
    request({ url: forecastURL, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        }
        else if (response.body.error) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast
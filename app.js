const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=ccc2c04a37c1c3342d8da4cc9b44ce31&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
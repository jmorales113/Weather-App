const weatherForm = document.querySelector("form")
const searchInput = document.querySelector("input")
const weatherMessage = document.querySelector("#weather-message")
const locationMessage = document.querySelector("#location-message")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const searchLocation = searchInput.value

    weatherMessage.textContent = "Loading weather..."
    locationMessage.textContent = ""

    fetch(`/weather?address=${searchLocation}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherMessage.textContent = data.error
            } else {
                weatherMessage.textContent = data.forecast
                locationMessage.textContent = data.location
            }
        })
    })
})


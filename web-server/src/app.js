const express = require("express")
const path = require("path")

const app = express()
const publicDirectory = path.join(__dirname, "../public")

app.use(express.static(publicDirectory))

app.get("/weather", (req, res) => {
    res.send({
        forecast: "80 degrees",
        location: "Los Angeles"
    })
})

app.listen(3000, () => {
    console.log("Server is up on Port 3000.")
})
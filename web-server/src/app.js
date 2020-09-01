const express = require("express")
const path = require("path")

const app = express()

// Define paths for Express confit
const publicDirectory = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates")

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Jorge Morales"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Jorge Morales"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help page",
        help: "This is the help page."
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: "80 degrees",
        location: "Los Angeles"
    })
})

app.listen(3000, () => {
    console.log("Server is up on Port 3000.")
})
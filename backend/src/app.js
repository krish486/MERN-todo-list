let express = require("express")
let app = express()
let listRoutes = require("./routes/list.routes")

let cors = require("cors")

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())

app.use("/api/lists", listRoutes)


module.exports = app
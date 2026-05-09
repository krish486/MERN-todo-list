let express = require("express")
let app = express()
let listRoutes = require("./routes/list.routes")

let cors = require("cors")

app.use(cors({
    origin: "https://mern-todo-list-ervs.onrender.com",
    credentials: true
}))

app.use(express.json())

app.use("/api/lists", listRoutes)


module.exports = app
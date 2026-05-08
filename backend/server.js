require("dotenv").config();


let app = require("./src/app")
let connectDB = require("./src/config/dataBase")


connectDB();

let port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on port-${port}`)
})
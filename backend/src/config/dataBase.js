require("dotenv").config();


let mongoose = require("mongoose")

let connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("DB connected succefully")
    }
    catch (err) {
        console.log("Error in DB connect-->", err)
    }

}


module.exports = connectDB;
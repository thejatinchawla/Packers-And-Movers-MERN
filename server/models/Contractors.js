const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    companyName : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        unique : true
    },
    place : {
        type : String,
        required : true
    },    
    password :{
        type : String,
        required : true
    },
    cpassword :{
        type : String,
        required : true
    }
})
const Contractors = new mongoose.model("admin",  signupSchema)
module.exports = Contractors

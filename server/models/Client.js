const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true,
        unique : true
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
const Client = new mongoose.model("client",  signupSchema)
module.exports = Client


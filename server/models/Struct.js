const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
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
const Struct = new mongoose.model("struct",  signupSchema)
module.exports = Struct


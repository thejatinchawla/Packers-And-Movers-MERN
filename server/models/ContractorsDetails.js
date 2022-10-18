const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    companyname : {
        type : String,
        required : true
    },
    about : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },    
    address :{
        type : String,
        required : true
    },
    call :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    weight :{
        type : String,
        required : true
    },
    needs :{
        type : String,
        required : true
    },
    furniture :{
        type : String,
        required : true
    },
    rate :{
        type : String
    }
})
const AdminDetails = new mongoose.model("admindetail",  signupSchema)
module.exports = AdminDetails




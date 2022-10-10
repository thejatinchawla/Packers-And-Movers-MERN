const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")
.then(()=>{
    console.log(`DB connection is successful`)
})
.catch((e)=>{
    console.log(e)
})
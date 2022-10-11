const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`DB connection is successful`)
})
.catch((e)=>{
    console.log(e)
})
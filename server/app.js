const express = require('express')
const app = express()
const port = 5000
const router = require('./router/details')
require("./db/conn")
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(cors())
app.use(router)



app.listen(port,()=>{
    console.log(`server is listening at www.http://localhost:${port}`)
})
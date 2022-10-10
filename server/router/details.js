const express = require('express')
const Struct = require('../models/Struct')
const router = new express.Router()
router.get('/',(req,res)=>{
    res.send(`router is working properly`)
})

router.post('/test',(req,res)=>{
    const fullname = req.body
    console.log(fullname)
})

router.post('/signup',async(req,res)=>{
    try {
        password = req.body.password
        cpassword = req.body.cpassword
        if (password == cpassword) {
            const dataSave = new Struct({
                fullname : req.body.fullname,
                email : req.body.email,
                password,
                cpassword
            })
            const dataSaved = await dataSave.save()
            res.status(201).json({msg:"created successfully",dataSaved})
            console.log(dataSaved);
        }
        else {
            res.status(501).json({msg:"passwords are not matching"})
        }
    } catch (error) {
        console.log(error);
    }
})

            

module.exports = router
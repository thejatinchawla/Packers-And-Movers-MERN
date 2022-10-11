const express = require('express')
const Struct = require('../models/Struct')
const router = new express.Router()


router.get('/',(req,res)=>{
    Struct.find()
    .exec()
    .then(result=>{
        res.status(200).send(result)
    }).catch(e=>{
        console.log(e);
    })
})


router.post('/signup',async(req,res)=>{
    try {
        const password = req.body.password
        const cpassword = req.body.cpassword
        if (password == cpassword) {
            const dataSave = new Struct({
                fullname : req.body.fullname,
                username : req.body.username,
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

router.post('/login',async(req,res)=>{
    try {
        const username = req.body.username
        const password = req.body.password
        const userDetail = await Struct.findOne({username:username})
        if (password == userDetail.password) {
            res.json({msg:"login successfull"})
        } else {
            res.status(401).json({msg:"invalid Details"})
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router


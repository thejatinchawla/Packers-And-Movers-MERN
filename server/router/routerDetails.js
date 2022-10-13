const express = require('express')
const Client = require('../models/Client')
const Admin = require('../models/Contractors')
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
            const dataSave = new Client({
                fullname : req.body.fullname,
                username : req.body.username,
                phone : req.body.phone,
                password,
                cpassword
            })
            const dataSaved = await dataSave.save()
            res.status(201).json({msg:"client account created successfully",dataSaved})
            console.log(dataSaved);
        }
        else {
            res.status(501).json({msg:"passwords are not matching"})
        }
    } catch (error) {
        console.log(error)
    }
})
router.post('/adminsignup',async(req,res)=>{
    try {
        const password = req.body.password
        const cpassword = req.body.cpassword
        if (password == cpassword) {
            const dataSave = new Admin({
                companyName : req.body.companyName,
                phone : req.body.phone,
                place : req.body.place,
                password,
                cpassword
            })
            const dataSaved = await dataSave.save()
            res.status(201).json({msg:"contractor accounnt created successfully",dataSaved})
            console.log(dataSaved);
        }
        else {
            res.status(501).json({msg:"passwords are not matching"})
        }
    } catch (error) {
        console.log(error)
    }
})


router.post('/login',async(req,res)=>{
    try {
        const username = req.body.username
        const password = req.body.password
        const userDetail = await Client.findOne({username:username})
        if (password == userDetail.password) {
            res.json({msg:"login successfull"})
        } else {
            res.status(401).json({msg:"invalid Details"})
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/admin',async(req,res)=>{
    try {
        const phone = req.body.phone
        const password = req.body.password
        const userDetail = await Admin.findOne({phone})
        if (password == userDetail.password) {
            res.json({msg:"Contractor login successfull"})
        } else {
            res.status(401).json({msg:"invalid Details"})
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router


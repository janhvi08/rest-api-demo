const express=require('express');
const router=express.Router();
const authcontroller=require('../controller/auth')

router.get('/Janhvi',authcontroller.getuser);

router.post('/signup',authcontroller.signup);



module.exports=router
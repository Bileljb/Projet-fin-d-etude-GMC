const express = require('express')
const authRout = express.Router() 
const { Register, Login, getMe } = require('../controllers/userController')
const {isAuth}=require("../middlewares/isAuth")
const { RegisterValidation, Validator } = require('../middlewares/validation')


authRout.post('/SignUp',RegisterValidation,Validator, Register)
authRout.post('/SignIn', RegisterValidation,Validator,Login)
authRout.get('/me',isAuth, getMe)

module.exports = authRout
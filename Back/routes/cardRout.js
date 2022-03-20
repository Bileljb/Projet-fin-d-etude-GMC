const express = require('express')
const { Addgigs, Deletegigs, Updategigs, Getgigs, Getonegig, Getallgigs } = require('../controllers/freelancerController')
const { isAuth } = require('../middlewares/isAuth')
const cardRout = express.Router()
const upload = require('../middlewares/upload')

// posti el 5dem fel feed page
cardRout.post('/PostGig',isAuth,Addgigs)

cardRout.get('/', isAuth,Getgigs)

cardRout.get('/allgigs',Getallgigs)

cardRout.delete('/:id', Deletegigs)

cardRout.put('/:id',upload.single('myImage'), Updategigs)

cardRout.get('/:id', Getonegig)



module.exports = cardRout

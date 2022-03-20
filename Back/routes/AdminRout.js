const express = require('express')
const AdminRout = express.Router()
const {GetFreelancers,DeleteFreelancers}= require('../controllers/AdminController')


AdminRout.get('/Freelancers',GetFreelancers )
AdminRout.delete('/:id',DeleteFreelancers )

module.exports = AdminRout


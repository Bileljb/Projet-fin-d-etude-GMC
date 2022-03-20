const express = require('express')
const authRout = require('./routes/auth')
const cardRoute = require('./routes/cardRout')
const AdminRout = require('./routes/AdminRout')
const connectdb = require('./config/connectdb')
require ('dotenv').config()
const app = express()
connectdb()
app.use(express.json())
app.use('/api/auth', authRout)
app.use('/api/gigs', cardRoute)
app.use('/api/dashboard', AdminRout)


app.listen(process.env.PORT, ()=> console.log(`server is running on prot ${process.env.PORT}`))




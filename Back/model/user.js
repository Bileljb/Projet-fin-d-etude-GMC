const mongoose = require('mongoose')


const Userschema = new mongoose.Schema({
    username: {type: String, required:true, unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profession: {type: String},
    contact:{type: String, required: true},
    role:
    {
        type: String,
        enum: ['client', 'admin', "freelancer"],
        default: 'client'
    },
})
module.exports = mongoose.model('User', Userschema)
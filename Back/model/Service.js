const mongoose = require('mongoose')


const serviceSchema = new mongoose.Schema({
    profession: { type: String, required: true },
    description: { type: String, required: true },
    userId: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // imageUrl: String
})
module.exports = mongoose.model('Service', serviceSchema)
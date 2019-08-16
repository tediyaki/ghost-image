const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GhostSchema = new Schema({
    title: String,
    link: String,
    rating: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Ghost', GhostSchema)
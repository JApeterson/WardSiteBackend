const mongoose = require('mongoose')

const cleanerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Cleaner', cleanerSchema)
//"Cleaner" is the name of the collection
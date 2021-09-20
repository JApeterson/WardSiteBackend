const mongoose = require('mongoose')

const cleanerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    notificationType: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    }
})
module.exports = mongoose.model('Cleaner', cleanerSchema)
//"Cleaner" is the name of the collection
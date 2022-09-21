const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
    name: String,
    image: {
        data: Buffer,
        type: String,
    }

    
})

module.exports = mongoose.model('Photo', photoSchema);
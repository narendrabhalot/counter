const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    }
}, { timestamps: true });


module.exports = mongoose.model('Count', counterSchema);


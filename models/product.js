const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required: true
    },
    featured : {
        type: Boolean,
        dafault: false
    },
    rating : {
        type: Number,
        dafault: 4.9
    },
    createdAt : {
        type: Date,
        dafault: Date.now()
    },
    company : {
        type: String,
        enum: {
            values : ["apple", "samsung", "vivo"],
            message : `{VALUE} is not supported`
        }
    },

});

module.exports = mongoose.model('Products', productSchema);
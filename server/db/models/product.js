const mongoose = require('mongoose');

const products = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image_url: {
        type: String,
        reqire: true,
    },
    catogory: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model("products", products);
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// source ~/.bashrc
// studio3t

const productAndcatSchema = new mongoose.Schema({
    category: {
        type: String
    },
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,

    },
    formerprice: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true,

    },
    selectcategory: {
        type: String,
    },
    info: {
        type: String,
        required: true,
    },
    shipping: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,

    }
})
module.exports = mongoose.model('ProductsAndCats', productAndcatSchema);
const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({

    name: {type: String, require: true},
    price: {type: String, require: true},
    image: {type: String, require: true},
    body: {type: String, require: true},
   
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
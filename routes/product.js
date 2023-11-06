const express = require('express');
const router = express.Router();
const Product = require('../model/Product');

const multer = require('multer');

const upload = multer({ dest: 'images/productImages' });

router.get('/', async (req, res) => {

    let products = await Product.find().exec();
    console.log(products);
    res.json(products);

})

router.post('/', upload.single('image'), async (req, res) => {
    const { name, price, body} = req.body;
    const image = req?.file?.filename;

    const foundProduct = await Product.findOne({ name: name }).exec();
    if (!foundProduct) {
        const result = await Product.create({
            'name': name,
            'price': price,
            'body': body,
            'image': image
        });
        res.json('Product Successfully Created');

    } else {
        res.json({'error' : 'Article Already Exists'})
    }
})

module.exports = router;
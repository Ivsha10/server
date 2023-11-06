const express = require('express');
const router = express.Router();
const Article = require('../model/Article');

const multer = require('multer');

const upload = multer({ dest: 'images/articleImages' });

router.get('/', async (req, res) => {

    let articles = await Article.find().exec();
    console.log(articles);
    res.json(articles);

})

router.post('/', upload.single('image'), async (req, res) => {
    const { title, author, body, date } = req.body;
    const image = req?.file?.filename;

    const foundArticle = await Article.findOne({ title: title }).exec();
    if (!foundArticle) {
        const result = await Article.create({
            'title': title,
            'author': author,
            'body': body,
            'date': date,
            'image': image
        });
        res.json('Article Successfully Created');

    } else {
        res.json({'error' : 'Article Already Exists'})
    }
})

module.exports = router;
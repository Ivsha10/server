const mongoose = require('mongoose');
const {Schema} = mongoose;

const articleSchema = new Schema({

    title: {type: String, require: true},
    author: {type: String, require: true},
    body: {type: String, require: true},
    image: {type: String, require: true},
    date: {type: String, require: true},
   
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
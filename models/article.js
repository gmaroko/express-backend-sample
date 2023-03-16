const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    content: {type: String, required: true},
    datePosted: {type: Date, default: Date.now()},
    title: {type: String, require: true},
    comments: {type: Object, default: []}
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;
const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    content: {type: String, required: true},
    datePosted: {type: Date, default: Date.now()},
    articleId: {type: Number, required: true}
});

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
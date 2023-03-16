const express = require('express');
const Article = require('../models/article');
const Comment = require('../models/comment');

const router = express.Router();

router.get("/articles", (req, res)=>{
    Article.find({}, (error, data)=>{
        if(error){
            res.status(500).send("Failed. Try again later");
        }
        res.json(data);
    });
})

router.get("/articles/:id", (req, res)=>{
    if(req.params.id){
        Article.find({id: req.params.id}, (error, data)=>{
            if(error){
                res.status(500).send("Failed. Try again later");
            }
            res.json(data);
        });
    }    
})

router.post("/articles/add", (req, res)=>{
    let newArticle = new Article(req.body);
    console.log("New article to be created: ", newArticle);
    res.json(newArticle.save());
})

router.post("/articles/comment", (req, res)=>{
    let newComment = new Comment(req.body);
    console.log("New comment to be created: ", newComment);
    res.json(newComment.save());
})

router.put("/articles/:id", (req, res)=>{
    let payload = req.body;
    Article.updateOne({id: req.params.id}, payload);
    res.send("Update success!");
})

router.delete("/articles/:id", (req, res)=>{
    Article.deleteOne({id: req.params.id});
    res.send("Delete success!");
})

module.exports = router;

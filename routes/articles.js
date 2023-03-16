const express = require('express');
const Article = require('../models/article');
const Comment = require('../models/comment');

const router = express.Router();

router.get("/articles", (req, res)=>{
    Article.find({}, (error, data)=>{
        if(error){
            res.status(500).send("Failed. Try again later");
        } else {
            res.json(data);
        }
    });
})

router.get("/articles/:id", (req, res)=>{
    if(req.params.id){
        Article.find({id: req.params.id}, (error, data)=>{
            if(error){
                res.status(500).send("Failed. Try again later");
            } else {
                res.json(data);
            }            
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
    // Article.updateOne({id: req.params.id}, payload);
    // Alternative:
    Article.findOne({id: req.params.id}, (error, data)=>{
        if(error){
            res.status(404).send(`Article with id ${req.params.id} not found`);
        } else {
            // for each field in the payload, find it in the article and update it.
            for(item in payload){
                data[item] = payload[item];
            }
            data.save();
            res.send({
                "status": "Update Sucess",
                "data": data
            });
        }
    })    
})

router.delete("/articles/:id", (req, res)=>{
    // Article.deleteOne({id: req.params.id});
    Article.findOneAndDelete({id: req.params.id}, (error, data)=>{
        if(error){
            res.status(404).send({
                "status": `Article with id ${req.params.id} not found`,
                "data": null
            });
        } else {
            res.send({
                "status": "Delete Sucess",
                "data": data
            });

        }
    })
})

module.exports = router;

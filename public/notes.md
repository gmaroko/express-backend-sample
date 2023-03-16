
User stories
As a user, I should be able to
    - See a list of available articles
    - Read a article
    - Create a article
    - Modify/Update a article
    - Delete a article
    - Comment on a article

Endpoints:
    - GET /articles -> get a list of all articles: Article.find({})
    - GET /articles/:id -> get a single article by id: Article.find({id: "id"})
    - POST /articles/add -> create new article given a model on req.body: Article.insertOne()
    - PUT /articles/:id -> update a single article by id, req.body, updateOne({id:'id'}, {})
    - DELETE /articles/:id  -> delete single article by id: deleteOne({id:'id'})
    - POST /articles/comment/:id -> create new comment, req.body: Comment.insertOne({})

Models:
    Article
        id - Number, required
        content - String
        datePosted - Date
        title - String
        comments - List

    Comment
        id
        datePosted
        content
        articleId



CRUD 
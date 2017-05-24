
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  
  app.get("/api/posts/:id", function(req, res) {

   
    db.Post.findAll({
      where: {
        userEmail: req.params.id
      },
      include: [db.User]
    }).then(function(dbPost) {
      res.json(dbPost);

    });

  });

  
  app.get("/api/article/:id", function(req, res) {

  
    db.Article.findAll({
      where: {
        userEmail: req.params.id
      },
      
    }).then(function(dbArticle) {
      res.json(dbArticle);

    });

  });






  app.get("/api/random/:num", function(req, res) {


  
    db.User.findOne({
      where: {
        randomVal: req.params.num
      },

      include: [db.Post]
    }).then(function(dbPost) {

    
      res.json(dbPost);


    });

  });


  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


   app.post("/api/article", function(req, res) {
    db.Article.create(req.body).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

//~~COMMENTS~~

// requests for comments below

app.post("/api/comments", function(req, res) {
    console.log(req.body);
    db.Comments.create(req.body).then(function(dbComments) {
      res.json(dbComments);



     });
    });

//grab comments
app.get("/api/comments/:body", function(req, res) {

  
    db.Comments.findAll({
      where: {
        body: req.params.body
      },
      include: [db.Post]
    }).then(function(dbComments) {
      res.json(dbComments);

    });

  });



app.get("/api/articleAll/", function(req, res) {

   
    db.Article.findAll({
      
    }).then(function(dbArticle) {
      res.json(dbArticle);

    });

  });


};

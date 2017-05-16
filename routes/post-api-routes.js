// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  
  app.get("/api/posts/:id", function(req, res) {

    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
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


    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.User.findOne({
      where: {
        randomVal: req.params.num
      },

      include: [db.Post]
    }).then(function(dbPost) {

    
      res.json(dbPost);
console.log("grabbed");

    });

  });

  // // Get rotue for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.User]
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

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


      // res.redirect(307, "/members");
     });
    });

//grab comments
app.get("/api/comments/:body", function(req, res) {

    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
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

    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Article.findAll({
      
    }).then(function(dbArticle) {
      res.json(dbArticle);

    });

  });




    // db.Comments.create({
    //   comment: req.body.comment,
    //   UserEmail: req.body.email,
    //   body: req.body.body,




  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });
};

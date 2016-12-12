//require dependencies
var express = require('express');
var router = express.Router();
var Post = require('../models/posts.js');


//index route
router.get('/', function(req, res){
  Post.find({}, function(err, foundPosts){
    res.render('posts/index.ejs',{
      post: foundPosts
    });
  });
});

//new route
router.get('/new', function(req, res){
  res.render('posts/new.ejs');
});

//create
router.post('/', function(req, res){
  Post.create(req.body, function(err, createdPost){
    res.redirect('/');
  });
});

//show
router.get('/:id', function(req, res){
  Post.findById(req.params.id, function(err, foundPost){
    console.log(foundPost);
    if (err) {console.log(err)};
    res.render('posts/show.ejs',{
      post: foundPost
    });
  });
});


//edit route(might have to switch position of this)

//post

//delete route

//export router
module.exports = router;

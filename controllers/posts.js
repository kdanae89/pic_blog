//require dependencies
var express = require('express');
var router = express.Router();
var Post = require('../models/posts.js');
var User = require('../models/users.js');


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
  User.find({}, function(err, allUsers){
    res.render('posts/new.ejs', {
      users: allUsers
    });
  });
});

//create
router.post('/', function(req, res){
  User.findById(req.body.userId, function(err, foundUser){
    Post.create(req.body, function(err, createdPost){
      foundUser.posts.push(createdPost);
      foundUser.save(function(err, data){
        res.redirect('/posts');
      });
    });
  });
});

//show
router.get('/:id', function(req, res){
  Post.findById(req.params.id, function(err, foundPost){
    res.render('posts/show.ejs',{
      post: foundPost
    });
  });
});


//edit route(might have to switch position of this)
router.get('/:id/edit', function(req, res){
  Post.findById(req.params.id, function(err, foundPost){
    res.render('posts/edit.ejs', {
      post: foundPost
    });
  });
});

//update
router.put('/:id', function(req, res){
  Post.findByIdAndUpdate(req.params.id, req. body, function(){
    res.redirect('/posts');
  });
});

//delete route
router.delete('/:id', function(req, res){
  Post.findByIdAndRemove(req.params.id, function(){
    res.redirect('/posts');
  });
});

//export router
module.exports = router;

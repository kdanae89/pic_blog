//require dependencies
var express = require('express');
var router = express.Router();
var Post = require('../models/posts.js');
var User = require('../models/users.js');


//index route
router.get('/', function(req, res){
  Post.find({}, function(err, foundPosts){
    User.find({}, function(err, foundUsers){
      res.render('posts/index.ejs', {
        posts: foundPosts,
        users: foundUsers
      });
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
    User.findOne({'posts._id':req.params.id}, function(err, foundUser){
      res.render('posts/show.ejs',{
        post: foundPost,
        user: foundUser
      });
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
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedPost){
    User.findOne({'posts._id': req.params.id}, function(err, foundUser){
      foundUser.posts.id(req.params.id).remove();
      foundUser.posts.push(updatedPost);
      foundUser.save(function(err, data){
        res.redirect('/posts');
      });
    });
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

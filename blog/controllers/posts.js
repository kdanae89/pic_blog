//require dependencies
var express = require('express');
var router = express.Router();
var Post = require('../models/posts.js');


//index route

//show route

//new route
router.get('/new', function(req, res){
  res.render('posts/new.ejs');
});

//create
router.post('/', function(req, res){
  Post.create(req.body, function(err, createdUser){
    res.redirect('/');
  });
});

//edit route(might have to switch position of this)

//post

//delete route

//export router
module.exports = router;

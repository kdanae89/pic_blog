//require dependencies
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var Post = require('../models/posts.js');


//index route
router.get('/', function(req, res){
  User.find({}, function(err, foundUsers){
    res.render('users/index.ejs',{
      users: foundUsers
    });
  });
});


//new route
router.get('/new', function(req, res){
  res.render('users/new.ejs');
});

//create
router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
    res.redirect('/');
  });
});

//show route
router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    console.log(foundUser);
    if (err) {console.log(err)};
    res.render('users/show.ejs',{
      user: foundUser
    });
  });
});

//edit route
router.get('/:id/edit', function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    res.render('users/edit.ejs', {
      user: foundUser
    });
  });
});

//post
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, function(){
    res.redirect('/users');
  });
});

//delete route
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(){
    res.redirect('/users');
  });
});

//export router
module.exports = router;

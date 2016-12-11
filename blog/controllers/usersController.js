//require dependencies
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


//index route
router.get('/', function(req, res){
  User.find({}, function(err, foundUsers){
    res.render('users/indexu.ejs',{
      users: foundUsers
    });
  });
});

//show route
router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, foundArticle){
    res.render('users/showu.ejs',{
      user: foundUser
    });
  });
});

//new route
router.get('/new', function(req, res){
  res.render('users/newu.ejs');
});

//create
router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
    res.redirect('/users');
  });
});

//edit route(might have to switch position of this)

//post

//delete route

//export router

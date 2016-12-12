//require dependencies
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');


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
    if (err) {console.log(err)};
    res.render('users/show.ejs',{
      user: foundUser
    });
  });
});

//edit route(might have to switch position of this)

//post

//delete route

//export router
module.exports = router;

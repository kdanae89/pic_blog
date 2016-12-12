//require dependencies
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

//new session require
router.get('/new', function(req, res){
  res.render('sessions/new.ejs');
});


//allow or deny access
router.post('/', function(req, res){
    User.findOne({ username: req.body.username }, function(err, foundUser){
        if(req.body.password == foundUser.password){
            req.session.currentuser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong password');
        }
    });
});


//terminate session
router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/');
  });
});

//export router
module.exports = router;

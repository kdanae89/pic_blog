//require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');


//middlewares - body-parser, method-override, session
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));


//model controllers


//render main page here, or i could do it in posts controller since they share an index page
//welcome current user if logged in
app.get('/', function(req, res){
  res.render('index.ejs');
});


//content for user or non user


//mongoose connection


//test for connection
mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', function(){
  console.log('mongooooo');
});



//listen to port
app.listen(3000, function(){
  console.log('suh dude');
});

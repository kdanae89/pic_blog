//require dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();


//middlewares - body-parser, method-override, session
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

// app.use(session({
//     secret: "seymourbuttz",
//     resave: false,
//     saveUninitialized: false
// }));
//
//
// //model controllers
var postsController = require('./controllers/posts.js');
app.use('/posts', postsController);

var usersController = require('./controllers/users.js');
app.use('/users', usersController);
//
//
// //render main page here, or i could do it in posts controller since they share an index page
// //welcome current user if logged in
app.get('/', function(req, res){
  res.render('index.ejs');
});


//content for user or non user


//mongoose connection
mongoose.connect('mongodb://localhost:27017/pic_blog');

//test for connection

mongoose.connection.once('open', function(){
  console.log('mongooooo');
});



//listen to port
app.listen(3000, function(){
  console.log('suh dude');
});

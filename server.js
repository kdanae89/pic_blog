//require dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var Post = require('./models/posts.js');
var User = require('./models/users.js');
var app = express();
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pic_blog';


//middlewares - body-parser, method-override, session
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(session({
    secret: "seymourbuttz",
    resave: false,
    saveUninitialized: false
}));
//
//
// //model controllers
var postsController = require('./controllers/posts.js');
app.use('/posts', postsController);

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
//
//
// //render main page here, or i could do it in posts controller since they share an index page
// //welcome current user if logged in
app.get('/', function(req, res){
  Post.find({}, function(err, foundPosts){
  //   User.findOne({username:req.body.username}, function(err, foundUser){
    res.render('index.ejs', {
      posts: foundPosts,
      // user: foundUser,
      currentUser: req.session.currentuser
    //   });
    });
  });
});


//content for user or non user



//mongoose connection
mongoose.connect(mongoDBURI);

//test for connection

mongoose.connection.once('open', function(){
  console.log('mongooooo');
});



//listen to port
app.listen(port, function(){
  console.log('listening ' + port);
});

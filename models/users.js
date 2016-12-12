//require dependencies
var mongoose = require('mongoose');
var Post = require('./posts.js');

//create schema
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  posts: [Post.schema]
});

//create model
var User = mongoose.model('User', userSchema);

//export model
module.exports = User;

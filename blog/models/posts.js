//require dependencies
var mongoose = require('mongoose');
var User = require('./users.js');

//create schema
var postSchema = mongoose.Schema({
  title: String,
  img: {type: String, required: true},
  date: Date,
  username: [User.schema]
});

//create model
var Post = mongoose.model('Post', postSchema);

//export model
module.exports = Post;

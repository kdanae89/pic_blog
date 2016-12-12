//require dependencies
var mongoose = require('mongoose');

//create schema
var postSchema = mongoose.Schema({
  title: String,
  img: {type: String, required: true},
  date: Date
});

//create model
var Post = mongoose.model('Post', postSchema);

//export model
module.exports = Post;

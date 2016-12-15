//require dependencies
var mongoose = require('mongoose');


//create schema
var postSchema = mongoose.Schema({
  userId: String,
  title: String,
  img: {type: String, required: true},
  date: Date,
  description: String,
  comments: [String]
});

//create model
var Post = mongoose.model('Post', postSchema);

//export model
module.exports = Post;

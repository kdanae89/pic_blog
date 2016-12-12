//require dependencies
var mongoose = require('mongoose');

//create schema
var userSchema = mongoose.Schema({
  username: String,
  password: String
});

//create model
var User = mongoose.model('User', userSchema);

//export model
module.exports = User;

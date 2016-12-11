//require dependencies
var mongoose = require('mongoose');

//create schema
var userSchema = mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true}
});

//create model
var User = mongoose.model('User', userSchema);

//export model
module.exports = User;

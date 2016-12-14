//require dependencies
var mongoose = require('mongoose');
var Post = require('./posts.js');
var bcrypt = require('bcrypt');

//create schema
var userSchema = mongoose.Schema({
  username: {type:String, required: true},
  password: {type:String, required: true},
  posts: [Post.schema]
});

//encrypt password
// userSchema.pre('save', function(next) {
//   if (!this.isModified('password')) { return next(); }
//   var hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
//   this.password = hashedPassword;
//   next();
// });
//
// //check encrypted password
// userSchema.methods.authenticate = function(password) {
//   return bcrypt.compareSync(password, this.password);
// }



//create model
var User = mongoose.model('User', userSchema);

//export model
module.exports = User;

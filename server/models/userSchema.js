var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// MEMBUAT SCHEMA
var userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema)
module.exports = User

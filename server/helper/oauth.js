var express = require('express');
var router = express.Router();
// SETUP mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms');
// SETUP jwt
let jwt = require('jsonwebtoken');
// SETUP passport
var passport = require('passport');
// SETUP schema
let User = require("../models/userSchema.js");
var methods = {}

methods.register = function (req, res, next) {
    User.register(new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email
    }), req.body.password, function (err) {
        if (err) {
            console.log('error while user register!', err);
            return next(err);
        }
        console.log('user registered!');
        next()
    });
}

methods.login = function (req, res, next) {
    passport.authenticate('local', function (err, user) {
        console.log(user);
        if (err) {
            console.log(err);
        } else {
            if (user != false) {
                var token = jwt.sign(user, 'secret')
                res.json(token)
                next()
            } else {
                res.send(`Wrong username or password`)
            }
        }
    })
    // default dari passport monggose
    (req, res, next)
}


module.exports = methods

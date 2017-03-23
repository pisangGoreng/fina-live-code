var express = require('express');
var router = express.Router();

// SETUP jwt
let jwt = require('jsonwebtoken');

// SETUP schema
let User = require("../models/userSchema.js");

var methods = {}

methods.verify = function (req, res, next) {
    let decode = jwt.verify(req.headers.token, 'secret')
    if (decode) {
        req.decode = {}
        req.decode = decode
        next()
    } else {
        res.send('salah')
    }
}


module.exports = methods

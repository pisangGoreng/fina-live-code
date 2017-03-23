var express = require('express');
var router = express.Router();
var oauth = require('../helper/oauth.js')
// var passport = require('passport');

router.post('/register', oauth.register, function (req, res, next) {
    res.send('sudah lewat middleware')
});

router.post('/login', oauth.login)
// , function (req, res, next) {
//     // res.send(req.test)
//     // res.send('sudah lewat middleware')
// });

module.exports = router;

var express = require('express');
var router = express.Router();
var oauth = require('../helper/oauth.js')
var jwt = require('../helper/jwt.js')
// var passport = require('passport');
var Content = require('../models/articleSchema')
var helperContent = require('../helper/content.js')

router.post('/register', oauth.register, function (req, res, next) {
    res.send('sudah lewat middleware')
});

router.post('/login', oauth.login)

router.get('/content', jwt.verify, helperContent.getAll);
router.get('/content/:slug', jwt.verify, helperContent.getOne);
router.post('/content', jwt.verify, helperContent.post);
router.post('/delete/:slug', jwt.verify, helperContent.delete);

module.exports = router;

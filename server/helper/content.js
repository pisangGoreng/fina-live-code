var express = require('express');
var router = express.Router();
var slug = require('slug')
// SETUP schema
let Article = require("../models/articleSchema.js");

var methods = {}

methods.getAll = function (req, res, next) {
    Article.find()
        .then(function (result) {
            res.send(result)
        })
        .catch(function (error) {
            res.send(error)
        })
}

methods.getOne = function (req, res, next) {
    Article.findOne({
            slug: req.params.slug
        })
        .then(function (result) {
            res.send(result)
        })
        .catch(function (error) {
            res.send(error)
        })
}

methods.post = function (req, res, next) {
    let newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        slug: slug(req.body.title)
    });

    newArticle.save(function (err, result) {
        if (err) return console.error(err);
        res.send(result)
    });
}

methods.delete = function (req, res, next) {
    Article.findOneAndRemove({
        slug: req.params.slug
    }, function (err, result) {
        var response = {
            message: `article with dataId ${req.params.slug} successfully deleted`,
            id: Article._id
        };
        res.send(response);
    });
}

methods.put = function (req, res, next) {
    Article.findOneAndUpdate({
        slug: req.params.slug
    }, {
        $set: {
            title: req.body.title,
            content: req.body.content,
            slug: slug(req.body.title)
        }
    }, {
        new: true
    }, function (err, result) {
        if (err) return res.send(err.message);
        res.send(result);
    });
}

module.exports = methods

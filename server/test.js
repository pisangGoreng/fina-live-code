var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/cms');
var slug = require('slug')

let Article = require("./models/articleSchema.js");

function insertContent() {
    let content1 = new Article({
        title: "seorang irwin pergi berbelanja di pasar",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: "58d36e32db26a51dcb9b0b78"
        slug: slug("seorang irwin pergi berbelanja di pasar")
    });

    let content2 = new Article({
        title: "menikah di bawah rembulan",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: "58d36e13db26a51dcb9b0b77"
        slug: slug("menikah di bawah rembulan")
    });

    content1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`content 1 berhasil dimasukkan`);
    });

    content2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`content 1 berhasil dimasukkan`);
    });
}

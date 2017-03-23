var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/cms');

let User = require("./models/userSchema.js");

function insertItem() {
    let user = new User({
        name: 'endy',
        username: 'endy',
        email: 'endy@gmail.com',
        password: 'bukabuka'
    });

    user.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`item 1 berhasil dimasukkan`);
    });
}

insertItem()

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/cms");
autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var articleSchema = mongoose.Schema({
    articleId: Number,
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    slug: String,
}, {
    timestamps: true
});

articleSchema.plugin(autoIncrement.plugin, {
    model: 'articleSchema',
    field: 'articleId'
});

var Article = mongoose.model('Content', articleSchema)
module.exports = Article

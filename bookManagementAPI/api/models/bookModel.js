'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the titlenpm of the book'
  },
  author: {
    type: String,
    required: 'Kindly enter the name of the author of the book'
  },
  year: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: 'Pages should at least be 1',
    min:1
  },
  createdAt: {
    type: Date,
    default:Date.now
  }
});

module.exports = mongoose.model('Books', BookSchema);
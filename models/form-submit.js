'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var formSubmit = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    date: String
});
//export our module to use in server.js
module.exports = mongoose.model('formSubmit', formSubmit);
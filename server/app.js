// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressJWT=require('express-jwt');
var jwt=require('jsonwebtoken');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
//var Regex = require("regex");
// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/AssnData');

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
var regex=RegExp(/\.(gif|jpg|jpeg|tiff|png|ico)$/i);
var regex2=RegExp("verifyemail");
var regex3=RegExp("Search");
var regex4=RegExp("updateemail");
app.use(expressJWT({secret:'check'}).unless({path:['/api/v1/Verify','/api/v1/comics',regex,regex2,regex3,regex4,'/api/v1/series']}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(express.static(__dirname));
routes = require('./routes/index')
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 4000;

// Start the server
app.listen(port);
console.log('Insert getat on port ' + port);
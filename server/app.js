var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var querystring = require('querystring');

app.use(express.static(__dirname));
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended:false })

http.createServer(app).listen('1100',function(err){
    if(err){
        console.log('服务器出错了');
    }else{
        console.log('Server is running... ');
    }
})

var requestFn = require('./request.js');

app.get('/login',function(req,res){
    res.end('loginPage');
})


app.get('/api/*',requestFn.getData);
app.post('/api/*',requestFn.postData);
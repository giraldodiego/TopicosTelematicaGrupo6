const express = require('express');
const morgan=require('morgan');
const path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(path.join(__dirname,'nginx.key'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname,'nginx.crt'), 'utf8');
var credentials = {key: privateKey, cert: certificate};

const {mongoose}=require('./database');

const app =express();

//Settings
//app.set('port',process.env.PORT || 3000)

//Middelewares   funciones que se ejecutan antes de 
app.use(morgan('dev'));
app.use(express.json()); //trabajar con los json

//Routes
app.use('/api/post',require('./routes/post.routes'));
app.get('/hi',(req,res)=>{
    res.send('hifi');
});



//Static files
app.use(express.static(path.join(__dirname,'public')))


//starting server
/*app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});*/

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
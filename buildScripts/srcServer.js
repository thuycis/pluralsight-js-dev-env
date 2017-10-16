var express = require('express');
var path = require('path');
var open = require('open');
//var webpack = require('webpack');
//var config = require('../webpack.config.dev');

/* eslint-disable no-console */

var port = 13372;
var app = express();
//var compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler,{
//     noInfo:true,
//     publicPath: config.output.publicPath
// }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'))
});

app.listen(port, function(err) {
    if (err){
        console.log(err);
    } else {
        open('http://localhost:'+port);

    }
})
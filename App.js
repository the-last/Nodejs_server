const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const allowCrossDomain = require('./config/access-control')
const morgan = require('./config/morgan')
const getResTime = require('./plugins/getResTime')

// var sequelize = require('./orm/sequelize');
var user = require('./orm/user');

var port = 3001;
var app = express();

app.use(allowCrossDomain);                   // 设置允许跨域
app.use(morgan);                             // 设置服务器响应的日志
app.use(express.static(__dirname + '/src')); // 将服务端静态文件对客户端共享
app.use(bodyParser.json());                  // 解析post请求的参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(getResTime);


app.get('/', function(req, res) {
    res.send('hello world');
});

// 模拟访问数据库s
app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

// 创建跨域连接
app.get('/crossDomain', function(req, res) {
    res.sendFile(__dirname + '/src/cross.html');
})

// 创建socket链接
app.get('/socket', function(req, res) {
    res.sendfile(__dirname + '/src/socket.html');
});

var socketApp = require('express')();
var server = require('http').Server(socketApp);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function(data) {
        console.log(data);
    });
});

app.listen(port);
console.log('service ' + port + ' is running...');
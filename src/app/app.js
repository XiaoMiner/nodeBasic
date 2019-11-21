const express = require('express');
const app = express();
const rootHandle = require('./router/root');
const bodyParser = require('body-parser');
const multer  = require('multer')
const upload = multer();
// 通过中间件处理web端http协议请求。
// 跨源堵塞处理。
app.use('*',function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*') // 任意域名都能访问,但是不能携带cookie.
    response.header('Access-Control-Allow-Headers','Origin, User-Agent, access_token, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')//设置方法。
    response.header('Content-Type', 'application/json;charset=utf-8')//utf-8解决乱码。
    if(request.method == 'OPTIONS'){
        // send的参数可以是Buffer对象，String，对象或Array,不支持一个整数。
        response.send({
            status: 200
        });// 在正常请求前,会发送一个验证,是否可以请求。
    }else {
        next();
    }
});

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

// 跟路由

app.use('/', upload.none(), rootHandle);

app.listen(9080, function(){
    console.log('The server is running on port 9080')
});
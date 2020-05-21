/***
 * @FileName:
 * @Author: manyao.zhu
 * @Date: 2019-12-17 11:45:19
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();

global.config = require('./config/base.config');

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 指定视图所在为位置
app.set('view engine', 'ejs'); // 注册模板引擎

app.use(logger('dev')); //加载日志中间件
app.use(express.json()); //加载解析json的中间件
app.use(express.urlencoded({ extended: false })); //加载解析urlencoded请求体的中间件
app.use(cookieParser()); //加载解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public'))); // 设置public文件夹为存放静态文件的目录

app.use('/', indexRouter); // 注册使用路由

// catch 404 and forward to error handler  捕获404错误，并转发到错误处理器。
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if (err.status == 404 || err.message.indexOf('Failed to lookup view') > -1) {
    res.render('not_found', {
      message: err.message,
      error: err
    });
  } else {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  }
});

module.exports = app;

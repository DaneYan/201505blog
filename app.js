var express = require('express');
var path = require('path');//处理路径的 join
var favicon = require('serve-favicon');//收藏夹图标
var logger = require('morgan');//记录日志
//cookie解析中间件 req.cookies
var cookieParser = require('cookie-parser');
//解析请求体的 req.body
var bodyParser = require('body-parser');
//路由
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//设置模板引擎
//设置模板的存放目录
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//当你在public目录下放置了收藏夹图标后可以取消此注释
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//记录访问日志的
app.use(logger('tiny'));//dev是一种日志格式
app.use(bodyParser.json());//处理JSON请求体
app.use(bodyParser.urlencoded({ extended: false }));//处理表单序列化 urlencoded请求体
app.use(cookieParser());//处理cookie
//处理静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);//指定路由
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

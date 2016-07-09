var express = require('express');
var router = express.Router();

//注册 当用户访问此路径的时候返回一个空白表单
router.get('/reg', function(req, res, next) {
  //第一个是相对路径，相对于views也就是模板的根目录
  res.render('user/reg',{title:'注册'});
});

//登陆 当用户访问此路径的时候返回一个空白表单
router.get('/login', function(req, res, next) {
  //第一个是相对路径，相对于views也就是模板的根目录
  res.render('user/login',{title:'登陆'});
});

//退出 当用户访问此路径的时候返回一个空白表单
router.get('/logout', function(req, res, next) {
  res.send('退出');
});

module.exports = router;

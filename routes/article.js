var express = require('express');
//路由工厂生成一个路由实例
var router = express.Router();

router.get('/add',function(req,res){
    res.render('article/add',{title:'发表文章'});
});
module.exports = router;



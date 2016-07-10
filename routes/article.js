var express = require('express');
//路由工厂生成一个路由实例
var router = express.Router();

router.get('/list',function(req,res){
    //populate可以传一个属性进去
    //负责把一个属性从对象ID类型转成一个文档对象
    Model('Article').find({}).populate('user').exec(function(err,docs){
        res.render('article/list', { title: '文章列表',articles:docs});
    });
});

router.get('/add',function(req,res){
    res.render('article/add',{title:'发表文章'});
});

router.post('/add',function(req,res){
    //请求体转成对象放在req.body上
    var article = req.body;
    //把当前登录的用户ID赋给user变量
    article.user = req.session.user._id;
    Model('Article').create(article,function(err,doc){
      if(err){
          req.flash('error','发表文章失败');
          return res.redirect('back');
      }else{
          req.flash('success','发表文章成功');
          return res.redirect('/');
      }
    });

});
module.exports = router;



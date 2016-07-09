module.exports = function(name){
    return function(msg){
        //读取环境变量DEBUG的值
        var DEBUG = process.env.DEBUG;
        //如果环境变量中的值和日志记录器的名字相同的话则
        //则输出日志,否则不输出日志
        //console.log(DEBUG,name);
        if(DEBUG == name){
            console.log(name,'',msg,'+0ms');
        }
    }
}
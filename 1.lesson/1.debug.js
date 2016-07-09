//用来写日志的 引入日志模块
var debug = require('./debug');
//创建一个日志记录器 接收一个名字作为参数
var server = debug('server');
//输出日志
//只有当环境变量中的DEBUG的值和日志记录器的名称匹配的时候才会真正向控制台输出
server('server log');

var client = debug('client');
client('client log');


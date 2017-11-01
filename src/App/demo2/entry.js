/*
 * @Author: mikey.zhaopeng 
 * @Date: 2017-10-27 11:16:37 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-27 16:11:06
 */
import dva from 'dva';
// 实例化一个app
const app = dva();

// 使用插件
app.use({});

// 添加数据模型
app.model(require('./models/count'));

// 添加路由
app.router(require('./router'));

// 运行
app.start('#root');




import dva from 'dva';
// 实例化一个app
const app = dva();

// 使用插件
app.use({});

// 添加数据模型
// app.model(require('./models/home'));

// 添加路由
app.router(require('./router'));

// 运行
app.start('#root');
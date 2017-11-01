## 版本： v 1.0.1

## 作者： 周毅

## 基于： dva-cli  V~ 0.8.2 构建
    链接：https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md

## 支持
    1. 多项目打包，提取公共js,css
    2. 热更新
    3. mockjs
    4. PX 自动转 rem 
    5. 持久化缓存   

## 结构划分
```bash
.
├── /dist/                  # 打包后文件
├── /mock/                  # 数据mock的接口文件
├── /node_modules/          # 依赖包
├── /public/                # 静态文件
├── /src/                   # 项目源码
│ ├── /App/                 # 项目总目录
│ │ ├── /DEMO/              # 项目平台
│ │ │ ├── ...               # 项目
│ │ │ │ ├── ...             # 各项目组件、数据模型等
│ ├── /components/          # 公共组件
│ ├── /models/              # 公共数据模型
│ ├── /services/            # 公共数据接口
│ ├── /svg/                 # 公共ICON
│ ├── /themes/              # 公共主题
│ ├── /utils/               # 公共工具函数 
│ │ ├── index.ejs           # HTML模板
├── package.json            # 项目信息
└── proxy.config.js         # 数据mock配置
```

## 项目入口
    在根目录 .roadhogrc.js 中的 entry 下 

### Demo文件夹 /src/App 下 
    demo1: 所有内容卸载一个 entry.js 页面，有详细的步骤
    demo2：将demo1拆分到各个独立文件，并且添加模拟数据mockjs
    demo3：在demo2的基础上，添加 Layout 公共组件 NavBar, MyIcon 等

    注：切换 demo 只需要在入口文件指向对应 demo 即可

## ICON 使用
    所有  .svg格式Icon 都存放在 /src/svg 文件夹内， 可在 svg 下自定义项目文件夹
    使用  ICON 时，见公共组件Myicon的使用方法

## 自定义主题
    自定义主题存放在 /src/themes 下
    修改根目录下 .roadhogrc.js 中的 theme 
    theme: str | file path




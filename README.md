## 版本： v 1.0.1

## 作者： 周毅

## 基于： dva-cli  V~ 0.8.2 构建
    链接：https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md

## 项目入口
    写在 .roadhogrc.js 的 entry 

## ICON 使用
    所有 .svg 都存放在 /src/svg 文件夹内， 可在 svg 下自定义项目文件夹
    使用 ICON 时，见 antd-mobile ICON使用方法
    链接： https://mobile.ant.design/components/icon-cn/ 

## 自定义主题
    自定义主题存放在 /src/themes 下
    修改 .roadhogrc.js 下的 theme 

# 支持
    1. PX 自动转 rem （根大小为"100px"）
    2. 热更新
    3. mock
    4. 多项目打包，提取公共js,css
    5. 持久化缓存

## 结构划分
```bash
.
├── /dist/                  # 打包后文件
├── /mock/                  # 数据mock的接口文件
├── /node_modules/          # 依赖包
├── /public/                # 静态文件
├── /src/                   # 项目源码
│ ├── /components/          # 公共组件
│ ├── /models/              # 公共数据模型
│ ├── /services/            # 公共数据接口
│ ├── /svg/                 # 公共ICON
│ ├── /themes/              # 公共主题
│ ├── /utils/               # 公共工具函数 
│ ├── /App/                 # 项目总目录
│ │ ├── /DEMO/              # 项目平台
│ │ │ ├── ...               # 项目
│ │ │ │ ├── ...             # 各项目组件、数据模型等
│ │ ├── template.ejs        # HTML模板
├── package.json            # 项目信息
└── proxy.config.js         # 数据mock配置
```


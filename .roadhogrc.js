const fs = require('fs');
const path = require('path');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), 
  path.resolve(__dirname, 'src/svg/'), 
];

/**
 * 入口文件；‘<project name> : < project path>’
 * eg: 'Demo/app':path.join(__dirname,'/src/App/demo/entry.js')
 * 如果入口为多个，启动项目，无法确认具体启动的是哪一个。
 */

let roadhogrcConfig = {
  entry: {
    // 'Demo1/app1':path.join(__dirname,'/src/App/demo1/entry.js'),
    // 'Demo2/app2':path.join(__dirname,'/src/App/demo2/entry.js'),
    'Demo3/app3':path.join(__dirname,'/src/App/demo3/entry.js'),
  },
  publicPath: "",
  theme:{},
  svgSpriteLoaderDirs: svgSpriteDirs,
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib", "style": true }]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib", "style": true }]
      ]
    }
  },
  autoprefixer: {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  hash:true,
  multipage: true,
}

export default roadhogrcConfig

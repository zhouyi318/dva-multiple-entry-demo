const path = require('path');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), 
  path.resolve(__dirname, 'src/svg/'), 
];

export default {
  entry: {
    'Demo1/app1':path.join(__dirname,'/src/App/demo1/entry.js'),
    'Demo2/app2':path.join(__dirname,'/src/App/demo2/entry.js'),
    'Demo3/app3':path.join(__dirname,'/src/App/demo3/entry.js'),
  },
  theme:{},
  publicPath: "",
  svgSpriteLoaderDirs: svgSpriteDirs,
  hash:true,
  multipage: true,
  autoprefixer: {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib", "style": "css" }]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib", "style": "css" }]
      ]
    }
  }
}

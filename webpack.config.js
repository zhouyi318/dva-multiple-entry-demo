const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpakConfig = (webpackConfig, env) => {
    // 判断环境
    const production = env === 'production';
    let [html, htmlArrObj] = [[],[]];
    // 添加简写
    webpackConfig.resolve.alias = {
        "mock": path.join(__dirname, '/mock'),
        "public": path.join(__dirname, '/public'),
        "assets": path.join(__dirname, '/src/assets'),
        "components": path.join(__dirname, '/src/components'),
        "models": path.join(__dirname, '/src/models'),
        "services": path.join(__dirname, '/src/services'),
        "utils": path.join(__dirname, '/src/utils')
    }
    // 提取入口名称
    for (let k in webpackConfig.entry) {
        html.push(k)
    }
    for (let i = 0; i < html.length; i++) {
        htmlArrObj[i] = {};
        htmlArrObj[i].excludeChunks = [];
        htmlArrObj[i].title = html[i].split('/')[0];
        for (let j = 0; j < html.length; j++) {
            if (html[j] !== html[i]) {
                htmlArrObj[i].excludeChunks.push(html[j])
            }
        }
    }
    //添加HTML模板
    for (let n = 0; n < htmlArrObj.length; n++) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            title: htmlArrObj[n].title,
            filename: htmlArrObj[n].title + '/index.html',
            template: path.join(__dirname, '/src/index.ejs'),
            excludeChunks: htmlArrObj[n].excludeChunks,
            inject: false
        }))
    }

    // 设置__DEV__，共HTML中判断环境
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        __DEV__: production
    }))

    // 写入配置文件
    fs.exists(path.join(__dirname, 'message.config.txt'), function(exists) {
        if (exists) {
            fs.unlink('message.config.txt', function(err) {
                if (err) { throw err; }
                console.log('文件:删除成功！');
                fs.writeFile('message.config.txt', JSON.stringify(webpackConfig), function(err) {
                    if (err) { throw err; }
                    console.log('配置:写入成功！');
                });
            })
        } else {
            fs.writeFile('message.config.txt', JSON.stringify(webpackConfig), function(err) {
                if (err) { throw err; }
                console.log('配置:写入成功！');
            });
        }
    })

    // webpackConfig.plugins.push(new HtmlWebpackPlugin({
    //     title:'Demo1',
    //     filename:'Demo1/index.html',
    //     template:path.join(__dirname,'/src/index.ejs'),
    //     excludeChunks:['Demo2/app2'],
    //     inject:false
    // }))

    return webpackConfig
}
export default webpakConfig
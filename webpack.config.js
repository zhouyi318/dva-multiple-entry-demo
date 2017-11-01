const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpakConfig = (webpackConfig, env) => {
    // 判断环境
    const production = env === 'production';

    if (production) {
        if (webpackConfig.module) {
            // ClassnameHash
            webpackConfig.module.rules.map((item) => {
                if (String(item.test) === '/\\.less$/' || String(item.test) === '/\\.css/') {
                item.use.filter(iitem => iitem.loader === 'css')[0].options.localIdentName = '[hash:base64:5]'
                }
                return item
            })
        }
        webpackConfig.plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            })
        )
    }

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
    let [html,htmlArrObj] = [[],[]];
    for (let k in webpackConfig.entry) {
        html.push(k)
    }

    for (let i = 0; i < html.length; i++) {
        htmlArrObj[i] = {};
        htmlArrObj[i].excludeChunks = [];
        for (let j = 0; j < html.length; j++) {
            if (html[j] !== html[i]) {
                htmlArrObj[i].excludeChunks.push(html[j])
            }
        }
    }

    for (let n = 0; n < html.length; n++) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            title: html[n],
            filename: `${html[n]}.html`,
            template: path.join(__dirname, '/src/index.ejs'),
            minify: production ? {
                collapseWhitespace: true,
            } : null,
            excludeChunks: htmlArrObj[n].excludeChunks,
            inject: 'body'
        }))
    }

    // 设置__DEV__，共HTML中判断环境
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        __DEV__: production
    }))

    return webpackConfig
}
export default webpakConfig
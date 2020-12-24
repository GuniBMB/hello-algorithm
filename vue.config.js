/*
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-24 11:20:00
 * @LastEditTime: 2020-12-24 11:42:27
 * @LastEditors: BMB
 */
const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir)
}
// 程序跟目录
const publicRoot = 'hello-algorithm';
// 这里是node引擎的CMD写法
module.exports = {
    // Weboack配置，有两种写法：函数式和对象，这里采用函数式
    configureWebpack: config => {
        config.amd = {
            toUrlUndefined: true
        };
        config.devtool = 'source-map'; //开启调试
        // 函数式配置不能直接替换，新增配置直接Push到Rules里面
        // config.module.rules.push({
        //     test: /\.less$/,
        //     use: ['less-loader']
        // });
    },
    chainWebpack: config => {
        // 别名
        let alias = config.resolve.alias;
        alias.set('@$', resolve('src'));
        alias.set('@V', resolve('views'));
    },
    outputDir: publicRoot,
    // 上产环境源码是否上传
    productionSourceMap: false,
    // 开发环境，代理服务器配置
    devServer: {
        port: 9006,
    },
    publicPath: `/${publicRoot}/`,
    // 忽略eslint提示
    lintOnSave: false,
    //如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: []

}
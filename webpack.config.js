var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    //插件数组
    plugins: [
        new ExtractTextPlugin("styles.css"),
        //初始化插件,传递模板参数
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'view/index.html',
            //自动生成HTML文件的名字
            filename: 'index.html',
            //引入打包后的js的script标签所在的位置,false表示不自动引入打包后的js
            //可以向模板传递参数，然后应用于自动生成的html,(模板需要获取参数)
            title: '我来自参数'
        })

    ],
    module: {
        rules: [{
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", 'sass-loader']
            })
        }]
    }
}
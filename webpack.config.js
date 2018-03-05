const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    // 入口文件
    entry: {
        index: __dirname + "/src/js/index/main.js",
        login: __dirname + "/src/js/login/main.js"
    },
    output: {
        // 设定import()动态js脚本名称
        chunkFilename: '[name].bundle.js',
        // 用于设定css中引用img的路径
        publicPath: "/dist/",
        path: __dirname + "/dist", //打包后的文件存放的地方
        // js输出路径,可以使用文件夹结构
        filename: "static/js/[name]_[chunkhash:8].js" //打包后输出文件的文件名
    },
    //插件数组
    plugins: [
        new CleanWebpackPlugin('dist/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin({
            filename: "static/style/[name]_[contenthash:8].css"
        }),
        //初始化插件,传递模板参数
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'view/index.html',
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: 'view/index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'view/login.html',
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: 'view/login.html',
            chunks: ['login']
        })
    ],
    module: {
        rules: [
            // loader
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'sass-loader']
                })
            }, {
                // 打包css中的img
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'static/img/[name]_[hash:8].[ext]',
                        limit: 10
                    }
                }]
            }
        ]
    }
}
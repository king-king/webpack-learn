const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    // 入口文件
    entry: {
        // verdor: [''],
        libs: [__dirname + "/static/js/lib/lib1.js", __dirname + "/static/js/lib/lib2.js"],
        index: __dirname + "/static/js/index/main.js",
        login: __dirname + "/static/js/login/main.js",
        home: __dirname + "/static/js/home/main.js",
        angular: __dirname + "/static/js/angular/main.js"
    },
    output: {
        // 设定import()动态js脚本名称
        chunkFilename: 'static/js/[name]_[chunkhash:8].async.js',
        // 用于设定css中引用img的路径
        publicPath: "/dist/",
        path: __dirname + "/dist", //打包后的文件存放的地方
        // js输出路径,可以使用文件夹结构
        filename: "static/js/[name]_[chunkhash:8].js" //打包后输出文件的文件名
    },
    devtool: 'source-map',
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
            chunks: ['manifest', 'index', 'libs']
        }),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'view/login.html',
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: 'view/login.html',
            chunks: ['manifest', 'login', 'libs']
        }),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'view/home.html',
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: 'view/home.html',
            chunks: ['manifest', 'home', 'libs']
        }),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'view/angular.html',
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: 'view/angular.html',
            chunks: ['manifest', 'angular', 'libs']
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/static/js/lib/promise_polyfill.7.1.0.js',
            to: __dirname + '/dist/static/js/lib/'
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: "libs"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: false
        // })
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
                        limit: 100
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-2'],
                        plugins: ['syntax-dynamic-import', ['transform-runtime', {
                            helpers: true,
                            polyfill: false
                        }]]
                    }
                }
            }
        ]
    }
}
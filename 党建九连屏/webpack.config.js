var path = require('path');
 
module.exports = {
    //入口文件
    entry: './src/main.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    //所使用的一些依赖模块
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test:/\.(sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true
                            // minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[{
                    loader:'url-loader',
                    options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                        name: 'img/[name].[ext]?[hash]',
                        limit: 10000, // 表示小于10kb的图片转为base64,大于10kb的是路径
                        // outputPath:'images' //定义输出的图片文件夹
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                        name:'font/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }

};


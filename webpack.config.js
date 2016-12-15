//var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

module.exports = {
    //devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        //'webpack/hot/dev-server',
        './src/js/test.js'
    ],
    output: {
        path: './js',
        filename: "bundle.js",
        //publicPath: __dirname + "./js/lib"
    },
    module: {
        loaders: [
            //{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            // { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            //{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=2048' },
            { test: /\.html$/, loader: "raw-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss', '.css', '.html']
    },
    plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            /*new HtmlWebpackPlugin({
                template: './index.html'
            })*/
        ]
        /*,
            devServer: {
                contentBase: './src',
                hot: true
            }*/
};

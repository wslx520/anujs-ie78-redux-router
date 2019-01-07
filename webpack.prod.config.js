const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    es3ifyPlugin = require('es3ify-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, ".");
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    entry: {
        polyfill : 'babel-polyfill',
        main : './src/index.js'
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    //如果不需要react这段可以去掉
    resolve: {
        root : ['./scss'],
        extensions: ['', '.js', '.jsx'],
        alias: {
            containers: path.resolve(__dirname, 'src/containers'),
            component: path.resolve(__dirname, 'src/component'),
            // 以前你可能这样引用 import { Nav } from '../../containers'
            // 现在你可以这样引用 import { Nav } from 'app/containers'
            actions: path.resolve(__dirname, 'src/actions'),
            store: path.resolve(__dirname, 'src/store'),
            images: path.resolve(__dirname, 'src/images'),
            // "react": "anujs-all",
            // "react-dom": "anujs-all",
            react: path.resolve('./src/lib/anujs-all.js'),
            'react-dom': path.resolve('./src/lib/anujs-all.js'),
        }
        // alias: {
        //     "react": "anujs/dist/ReactIE.js",
        //     "react-dom": "anujs/dist/ReactIE.js",
        //     'prop-types': 'anujs/lib/ReactPropTypes',
        //     'devtools' : "anujs/lib/devtools",
        //     'create-react-class': 'anujs/lib/createClass'
        // }
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-router': 'ReactRouter',
    // },
    module: {
        loaders: [
            {test: /\.(js|jsx)(\?.*$|$)/,exclude: /node_modules/,loader: 'babel-loader'},
            {test: /\.(png|jpg|gif|bmp|svg|swf)(\?.*$|$)/, loader: "url?limit=2048&name=img/[hash:5].[ext]" },
            {test: /\.css$/,loader: "style!css"},
            {test: /\.scss$/,loader: ExtractTextPlugin.extract("style", "css?modules=true&sourceMap=true!postcss!sass", {publicPath: "./"})},
        ],
        postLoaders: [
            // {test: /\.(js|jsx)(\?.*$|$)/,loader: "es3ify-loader"},
            // {test: /\.(js|jsx)$/,loader: 'export-from-ie8/loader'}
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },
    plugins: [
        new es3ifyPlugin(),
        new ExtractTextPlugin("./css/[name].[hash:5].css"),
        new HtmlWebpackPlugin({template : "src/index.html"}),
        new webpack.optimize.UglifyJsPlugin({mangle : false, output : {keep_quoted_props:true}, compress : {properties:false, drop_console: true},comments:false}),
        new CleanWebpackPlugin("build", {root:ROOT_PATH})
    ],
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        progress: true,
        outputPath : BUILD_PATH,
        host : "0.0.0.0",
        port:3000
    },
    devtool: 'source-map'
}

/* =====================================
    Webpack config
   ===================================== */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.md$/,
                use: ['html-loader', {
                    loader: 'markdown-loader',
                    options: {
                        breaks: true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                include: path.resolve('./src/img/icons'),
                use: [
                    {
                        loader: 'svg-sprite-loader',
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false }},
                                { convertPathData: false }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src/modules'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new SpriteLoaderPlugin(),
        new webpack.ProvidePlugin({
            debounce: ['lodash', 'debounce'],
            throttle: ['lodash', 'throttle'],
            breakpoint: ['breakpoint', 'default']
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
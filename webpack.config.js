var path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                // include: path.join(__dirname, 'src'),
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: []
};

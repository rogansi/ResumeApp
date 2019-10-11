//webpack.config.js

module.exports = {
    entry: ['babel-polyfill', './app/main.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3020
    }
}
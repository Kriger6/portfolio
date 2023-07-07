const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.css$/,
                use: [
                        'style-loader',
                        'css-loader'
                ]
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                include: /src/,
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.ts', 'jsx']
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: './src/index.html',
                favicon: './src/favicon/favicon.ico'
            }
        )
    ]
}
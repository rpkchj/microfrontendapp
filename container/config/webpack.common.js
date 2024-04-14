const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules:[ //define loader -> use of loader is to tell webpack process some different files as we import them into our project
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins:[
                        '@babel/plugin-transform-runtime'
                    ]
                }
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
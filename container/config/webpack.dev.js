const {merge} = require('webpack-merge');

const commonCofig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer:{
        port: 8080,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'Container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared:['react', 'react-dom']
            shared: packageJson.dependencies
        }),
        
    ]
}

module.exports = merge(commonCofig, devConfig);
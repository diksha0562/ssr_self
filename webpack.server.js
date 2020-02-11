
const path = require('path');
const config = {
    target: "node",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
     },
     mode:'development',
    module: {
        rules: [
           {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            //   options: {
            //       presets:['react', 'stage-0', ['env', {targets: {browsers : ['last 2 versions']}}]]
            //   }
            query: {
                presets: ['es2015', 'react', 'stage-0']
             }
           }
        ]
     }

}
module.exports = config;
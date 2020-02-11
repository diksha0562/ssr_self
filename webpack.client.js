const path = require('path');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = {
   entry: './src/client/main.js',
   output: {
      path: path.join(__dirname,'dist'),
      filename: 'index_bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: [
                   //take all jsx and convert it to normal js function calls
                   'react',
                   // used to handle async code
                   'stage-0',
                   // run all diff transform rules needed for last 2 versions
                   ['env', {targets: {browsers : ['last 2 versions']}}]

               ]
           }
         }
      ]
   },
    plugins: [
      new reactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ],
}
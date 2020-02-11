* npm init

* "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.0.6",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "express": "^4.17.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router-config": "^5.1.1",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1"
  },
  "devDependencies": {
    "babel-preset-react": "^6.24.1",
    "html-webpack-plugin": "^3.2.0"
  }

* webpack.client.js

* webpack.server.js

* "dev:build-server": "webpack --config webpack.server.js --watch"

* src/index.js - server (express)

* Routes.js

* App.js export - component, loadData

* main.js - import {renderRoutes} from 'react-router-config' 

* App.js - import {renderRoutes} from 'react-router-config';

* additional props they'd like to a route, you can access props.route inside the component, this object is a reference to the object used to render and match

* use -  import { StaticRouter } from 'react-router-dom'; instead of 'browser-router' bcoz browser-router read path from address bar but at server we dont have access of address bar

* using renderToString convert component node to string 

* render HTML

### react-loadable library

* Splitting routers components we will solve by using react-loadable library.

* const ToDoComponent = Loadable({
    loader: ()=>import('./ToDoList/index'),
    loading(){
        return <div>Loading...</div>
    },
    modules: ['./ToDoList'],
    webpack: () => [require.resolveWeak('./ToDoList')],
});

** modules ** required in SSR as `Loadable.Capture` report these modules array or u can provide `{
  "plugins": ["react-loadable/babel"]
}` in .babelrc

* in webpack.config.js use `react-loadable/webpack` it will create a manifest file which depicts which module to load on that particular route
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
plugins: [
      new reactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ]

* `renderToString` method at server 
`Loadable.Capture` method push all the modules which matches the route 

renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.path} context={{}}>
        
            <div>{renderRoutes(Routes)}</div>
         
         </StaticRouter>
         </Loadable.Capture>
    )

* `getBundles` extract bundles of js and css files having those particular modules
import { getBundles } from 'react-loadable/webpack'
bundles = getBundles(stats, modules);
  ${bundles.map(bundle => {
            return `<script type="text/javascript" src="${bundle.file}"></script>`
          }).join('\n')}

* `Loadable.preloadAll` method. It returns a promise that will resolve when all your loadable components are ready.

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});

* `Loadable.preloadReady()` method on the client to preload the loadable components that were included on the page.

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(<App/>, document.getElementById('app'));
});

* **`React.Lazy`** wont work in SSR.








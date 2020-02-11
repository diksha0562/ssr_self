import express from 'express';
// const express = require('express');
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from '../dist/react-loadable.json';
const React = require('react');
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from './client/Routes';
import {renderRoutes, matchRoutes} from 'react-router-config';
const app = express();
app.use(express.static('dist'));
app.get('*', (req, res)=>{
    console.log('matchRoutes--',matchRoutes(Routes, req.path));
    let modules = [];
    const content = renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.path} context={{}}>
        
            <div>{renderRoutes(Routes)}</div>
         
         </StaticRouter>
         </Loadable.Capture>
    );
    // console.log('content', content);
    console.log('modules-------------',modules);
    let bundles = getBundles(stats, modules);
    console.log('bundles-------------',bundles);
    const renderedHtml = `
    <html>
    <head>
    </head>
    <body>
    <div id="root">${content}</div>
    <script type="text/javascript" src="index_bundle.js"></script>
    ${bundles.map(bundle => {
            return `<script type="text/javascript" src="${bundle.file}"></script>`
            // alternatively if you are using publicPath option in webpack config
            // you can use the publicPath value from bundle, e.g:
            // return `<script src="${bundle.publicPath}"></script>`
          }).join('\n')}
    </body>
    </html>
    `;
    res.send(renderedHtml);

    // res.send('heyya')
});
Loadable.preloadAll().then(() => {
app.listen(8000, ()=>{
    console.log('server running at 8000');
})
});

import React from 'react';
import ReactDOM from 'react-dom';
import {renderRoutes} from 'react-router-config';
import { BrowserRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import Routes from './Routes';
Loadable.preloadReady().then(() => {
ReactDOM.hydrate(<BrowserRouter><div>{renderRoutes(Routes)}</div></BrowserRouter>, document.getElementById('root'));
});
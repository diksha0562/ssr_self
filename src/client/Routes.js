import React from 'react';
import Loadable from 'react-loadable';

  const HomePage = Loadable({
    loader: () => import('./HomePage'),
    loading() {
      return <div>Loading...</div>
    },
    // modules: ['./HomePage'],
    // delay: 300,
  });
  const AboutPage = Loadable({
    loader: () => import('./AboutPage'),
    loading() {
      return <div>Loading...</div>
    },
    // modules: ['./AboutPage'],
    // delay: 300,
  });
  const ToDoList = Loadable({
    loader: () => import('./ToDoList'),
    loading() {
      return <div>Loading...</div>
    },
    // modules: ['./ToDoList'],
    // delay: 300,
  });
import App from './App';

export default [
    {
        component: App,
        routes: [
            {
                component: HomePage,
                path: '/home',
                exact: true,
            },
            {
                component: AboutPage,
                path: '/about',
                exact: true,
            },
            {
                component: ToDoList,
                path: '/todos',
                exact: true,
            }
        ]
    }
]
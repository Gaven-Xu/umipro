import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.jsx').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": require('../index.jsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.jsx').default
      },
      {
        "component": () => React.createElement(require('C:/Users/Gaven/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@0.19.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.jsx","routes":[{"path":"/index.html","exact":true,"component":"./src/pages/index.jsx"},{"path":"/","exact":true,"component":"./src/pages/index.jsx"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}

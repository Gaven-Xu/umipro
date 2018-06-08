import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/activity/20180604",
        "exact": true,
        "component": require('../activity/20180604/index.jsx').default
      },
      {
        "path": "/book",
        "exact": true,
        "component": require('../book.jsx').default
      },
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
        "path": "/self",
        "exact": true,
        "component": require('../self.jsx').default
      },
      {
        "component": () => React.createElement(require('C:/Program Files/nodejs/node_modules/umi/node_modules/_umi-build-dev@0.19.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/activity/20180604","exact":true,"component":"./src/pages/activity/20180604/index.jsx"},{"path":"/book","exact":true,"component":"./src/pages/book.jsx"},{"path":"/index.html","exact":true,"component":"./src/pages/index.jsx"},{"path":"/","exact":true,"component":"./src/pages/index.jsx"},{"path":"/self","exact":true,"component":"./src/pages/self.jsx"}]}]' })
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

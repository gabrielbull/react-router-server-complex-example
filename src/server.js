import React from 'react';
import App from '../build/server/app';
import { renderToString, extractModules } from 'react-router-server';
import { ServerRouter, createServerRenderContext } from 'react-router'
import express from 'express';
import path from 'path';
import stats from '../build/public/stats.json';

const app = express();
const context = createServerRenderContext();

app.use(express.static(path.join(__dirname, '..', 'build', 'public')));

app.get('*', function (req, res) {
  const server = (
    <ServerRouter
      location={req.url}
      context={context}
    >
      <App/>
    </ServerRouter>
  );

  renderToString(server, context)
    .then(({ html, state, modules }) => {
      const result = context.getResult();
      if (result.redirect) {
        // redirect
      } else if (result.missed) {
        // 404
      } else {
        const extracted = extractModules(modules, stats);
        res.render(
          path.join(__dirname, '..', 'index.ejs'),
          {
            html,
            state,
            files: [].concat.apply([], extracted.map(module => module.files)),
            modules: extracted
          }
        );
      }
    })
    .catch(err => console.error(err));
});

app.listen(3000, function () {
  console.log('Example site listening on 3000!');
});

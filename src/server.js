import React from 'react';
import App from '../build/server/app';
import { renderToString, extractModules } from 'react-router-server';
import { ServerRouter, createServerRenderContext } from 'react-router'
import express from 'express';
import path from 'path';
import stats from '../build/public/stats.json';

const app = express();
app.use(express.static(path.join(__dirname, '..', 'build', 'public')));

app.get('/*', function (req, res) {
  if (req.url) {
    const context = createServerRenderContext();
    const server = (
      <ServerRouter
        location={req.url}
        context={context}
      >
        <App/>
      </ServerRouter>
    );

    renderToString(server)
      .then(({ html, state, modules }) => {
        const result = context.getResult();
        if (result.redirect) {
          res.redirect(result.redirect.pathname);
        } else if (result.missed) {
          res.status(404).render(
            path.join(__dirname, '..', 'index.ejs'),
            { html }
          );
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
  }
});

app.listen(3000, function () {
  console.log('Example site listening on 3000!');
});

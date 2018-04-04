const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const testRouter = require('./routes/test');

app
  .prepare()
  .then(() => {
    const server = express();

    // Routes declaration
    testRouter(app, server, handle);

    server.get('*', (req, res) => handle(req, res));

    server.listen(8080, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:8080');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

const express = require('express');
const next = require('next');

const port = 8080;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const testRouter = require('./routes/testurl');

app
  .prepare()
  .then(() => {
    const server = express();

    // Routes declaration
    testRouter(app, server, handle);

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

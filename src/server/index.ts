import express from 'express';
import Rollbar from 'rollbar';
import { config } from 'dotenv';
import { home, math, notFound } from './routes';

config();

const PORT = process.env.PORT || 8080;

const app = express();
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: process.env.NODE_ENV,
});

app.use(rollbar.errorHandler());

app.use('/public', express.static('dist/public'));

app.get('/', home);

app.get('/:operation/:a/:b', math(rollbar));

app.get('*', notFound(rollbar));

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`Running on port ${PORT}`);

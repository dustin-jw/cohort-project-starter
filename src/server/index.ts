import express, { Request, Response } from 'express';
import Rollbar from 'rollbar';
import { config } from 'dotenv';
import { home, math, notFound } from '../pages';
import {
  add, subtract, multiply, divide,
} from '../js/utilities/arithmetic';
import formatParams from './formatParams';
import getErrorMessage from '../js/utilities/getErrorMessage';

config();

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: process.env.NODE_ENV,
});

app.use(rollbar.errorHandler());

app.use('/public', express.static('dist/public'));

app.get('/', (request: Request, response: Response) => {
  response.send(home());
});

app.get('/:operation/:a/:b', (request: Request, response: Response) => {
  try {
    let result = '';
    const { operation, a, b } = formatParams(request.params);

    switch (operation) {
      case 'add':
        result = `${a} + ${b} = ${add(a, b)}`;
        break;
      case 'subtract':
        result = `${a} - ${b} = ${subtract(a, b)}`;
        break;
      case 'multiply':
        result = `${a} &times; ${b} = ${multiply(a, b)}`;
        break;
      case 'divide':
        result = `${a} &divide; ${b} = ${divide(a, b)}`;
        break;
      default:
        break;
    }
    response.send(math(operation, result));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    rollbar.error(errorMessage, request);

    response.status(400).send(getErrorMessage(errorMessage));
  }
});

app.get('*', (request: Request, response: Response) => {
  rollbar.warn('Resource not found', request);
  response.status(404).send(notFound());
});

app.listen(PORT, HOST);

// eslint-disable-next-line no-console
console.log(`Running on http://${HOST}:${PORT}`);

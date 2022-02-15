import express, { Request, Response } from 'express';
import { home, math, notFound } from '../pages';
import {
  add, subtract, multiply, divide,
} from '../js/utilities/arithmetic';
import paramsToNumbers from './paramsToNumbers';
import getErrorMessage from '../js/utilities/getErrorMessage';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use('/public', express.static('dist/public'));

app.get('/', (request: Request, response: Response) => {
  response.send(home());
});

app.get('/add/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(math('add', `${a} + ${b} = ${add(a, b)}`));
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('/subtract/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(math('subtract', `${a} - ${b} = ${subtract(a, b)}`));
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('/multiply/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(math('multiply', `${a} &times; ${b} = ${multiply(a, b)}`));
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('/divide/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(math('divide', `${a} &divide; ${b} = ${divide(a, b)}`));
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('*', (request: Request, response: Response) => {
  response.status(404).send(notFound());
});

app.listen(PORT, HOST);

// eslint-disable-next-line no-console
console.log(`Running on http://${HOST}:${PORT}`);

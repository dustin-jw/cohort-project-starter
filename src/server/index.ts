import express, { Request, Response } from 'express';
import { home } from '../pages';
import {
  add, subtract, multiply, divide,
} from '../js/arithmetic';
import paramsToNumbers from './paramsToNumbers';
import getErrorMessage from '../js/getErrorMessage';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request: Request, response: Response) => {
  response.send(home());
});

app.get('/add/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} + ${b} = ${add(a, b)}`);
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('/subtract/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} - ${b} = ${subtract(a, b)}`);
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('/multiply/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} * ${b} = ${multiply(a, b)}`);
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.get('/divide/:a/:b', (request: Request, response: Response) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} / ${b} = ${divide(a, b)}`);
  } catch (error) {
    response.status(400).send(getErrorMessage(error));
  }
});

app.listen(PORT, HOST);

// eslint-disable-next-line no-console
console.log(`Running on http://${HOST}:${PORT}`);

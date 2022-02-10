import express from 'express';
import { add, subtract, multiply, divide } from './utilities/arithmetic';
import { paramsToNumbers } from './utilities/paramsToNumbers';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request: any, response: any) => {
  response.send('Hello World');
});

app.get('/add/:a/:b', (request: any, response: any) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} + ${b} = ${add(a, b)}`);
  } catch (error: any) {
    response.status(400).send(error.message);
  }
});

app.get('/subtract/:a/:b', (request: any, response: any) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} - ${b} = ${subtract(a, b)}`);
  } catch (error: any) {
    response.status(400).send(error.message);
  }
});

app.get('/multiply/:a/:b', (request: any, response: any) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} * ${b} = ${multiply(a, b)}`);
  } catch (error: any) {
    response.status(400).send(error.message);
  }
});

app.get('/divide/:a/:b', (request: any, response: any) => {
  try {
    const { a, b } = paramsToNumbers(request.params);
    response.send(`${a} / ${b} = ${divide(a, b)}`);
  } catch (error: any) {
    response.status(400).send(error.message);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

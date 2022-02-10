import express from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request: any, response: any) => {
  response.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

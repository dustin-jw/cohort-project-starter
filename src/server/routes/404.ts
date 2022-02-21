import { Request, Response } from 'express';
import Rollbar from 'rollbar';
import { notFound as notFoundPage } from '../../pages';

const notFound = (rollbar: Rollbar) => (request: Request, response: Response) => {
  rollbar.warn('Resource not found', request);
  response.status(404).send(notFoundPage());
};

export { notFound };

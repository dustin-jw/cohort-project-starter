import { Request, Response } from 'express';
import Rollbar from 'rollbar';
import formatParams from '../formatParams';
import {
  add, subtract, multiply, divide,
} from '../../js/utilities/arithmetic';
import getErrorMessage from '../../js/utilities/getErrorMessage';
import { math as mathPage } from '../../pages';

const math = (rollbar: Rollbar) => (request: Request, response: Response) => {
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
    response.send(mathPage(operation, result));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    rollbar.error(errorMessage, request);

    response.status(400).send(getErrorMessage(errorMessage));
  }
};

export { math };

import { ParamsDictionary } from 'express-serve-static-core';

interface ParamsOutput {
  a: number;
  b: number;
}

const paramsToNumbers = (params: ParamsDictionary): ParamsOutput => {
  const a = Number.parseFloat(params.a);
  const b = Number.parseFloat(params.b);

  if (Number.isNaN(a)) {
    throw new Error('a must be a number');
  }

  if (Number.isNaN(b)) {
    throw new Error('b must be a number');
  }

  return {
    a,
    b,
  };
};

export default paramsToNumbers;

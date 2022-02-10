interface ParamsInput {
  a: string;
  b: string;
};

interface ParamsOutput {
  a: number;
  b: number;
};

const paramsToNumbers = (params: ParamsInput): ParamsOutput => {
  const a = Number.parseFloat(params.a);
  const b = Number.parseFloat(params.b);

  if (Number.isNaN(a)) {
    throw new TypeError('a must be a number');
  }

  if (Number.isNaN(b)) {
    throw new TypeError('b must be a number');
  }

  return {
    a,
    b,
  };
};

export { paramsToNumbers };

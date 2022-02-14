import paramsToNumbers from './paramsToNumbers';

describe('paramsToNumbers', () => {
  it('converts string params to numbers', () => {
    expect(paramsToNumbers({ a: '2', b: '2' })).toEqual({ a: 2, b: 2 });
  });

  it('throws errors for invalid inputs', () => {
    expect(() => {
      paramsToNumbers({ a: 'foo', b: '2' });
    }).toThrow('a must be a number');

    expect(() => {
      paramsToNumbers({ a: '2', b: 'foo' });
    }).toThrow('b must be a number');

    expect(() => {
      paramsToNumbers({ a: 'foo', b: 'bar' });
    }).toThrow('a must be a number');
  });
});

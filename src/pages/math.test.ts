import { mathPageContent } from '.';

const additionContent = `
  <h1>Add</h1>

  <p>
    2 + 2 = 4
  </p>
`;

const subtractionContent = `
  <h1>Subtract</h1>

  <p>
    2 - 2 = 0
  </p>
`;

const multiplicationContent = `
  <h1>Multiply</h1>

  <p>
    2 &times; 2 = 4
  </p>
`;

const divisionContent = `
  <h1>Divide</h1>

  <p>
    2 &divide; 2 = 1
  </p>
`;

describe('math page', () => {
  it('renders the "add" page correctly', () => {
    expect(mathPageContent('Add', '2 + 2 = 4')).toEqual(additionContent);
  });

  it('renders the "subtract" page correctly', () => {
    expect(mathPageContent('Subtract', '2 - 2 = 0')).toEqual(subtractionContent);
  });

  it('renders the "multiply" page correctly', () => {
    expect(mathPageContent('Multiply', '2 &times; 2 = 4')).toEqual(multiplicationContent);
  });

  it('renders the "divide" page correctly', () => {
    expect(mathPageContent('Divide', '2 &divide; 2 = 1')).toEqual(divisionContent);
  });
});

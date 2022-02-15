import { notFoundContent } from '.';

const content = `
  <h1>404 Not Found</h1>

  <p>
    We couldn't find what you were looking for.
  </p>
  <p>
    <a href="/">Home Page</a>
  </p>
`;

describe('404 page', () => {
  it('renders the 404 page correctly', () => {
    expect(notFoundContent()).toEqual(content);
  });
});

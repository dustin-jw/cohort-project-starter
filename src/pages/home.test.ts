import { homePageContent } from '.';

const content = `
  <h1>Hello World!</h1>

  <p>
    Welcome to the home page!
  </p>
`;

describe('home page', () => {
  it('renders the home page correctly', () => {
    expect(homePageContent()).toEqual(content);
  });
});

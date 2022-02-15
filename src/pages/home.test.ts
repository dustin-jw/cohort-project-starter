import { homePageContent } from '.';

const content = `
  <h1>Hello World!</h1>

  <p>
    Welcome to the home page!
  </p>

  <div>
    <button type="button" data-increment>
      Click Me!
    </button>
  </div>

  <p>
    Click Count: <span data-counter>0</span>
  </p>
`;

describe('home page', () => {
  it('renders the home page correctly', () => {
    expect(homePageContent()).toEqual(content);
  });
});

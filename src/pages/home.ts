import layout from '../partials/layout';

const homePageContent = (): string => `
  <h1>Hello World!</h1>

  <p>
    Welcome to the home page!
  </p>
`;

const home = () => {
  const content = homePageContent();

  return layout({
    content,
    pageTitle: 'Home',
    description: 'This is the home page.',
  });
};

export { home, homePageContent };

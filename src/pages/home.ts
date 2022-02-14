import layout from '../partials/layout';

const home = () => {
  const content = `
    <h1>Hello World!</h1>

    <p>
      Welcome to the home page!
    </p>
  `;

  return layout({
    content,
    pageTitle: 'Home',
    description: 'This is the home page.',
  });
};

export { home };

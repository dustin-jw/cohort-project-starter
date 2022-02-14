import layout from './layout';

const defaultLayout = `
<!doctype html>

<html lang="en" >
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Project Starter | Project Starter</title>
    <meta name="description" content="This is the page description.">

    <link rel="stylesheet" href="/public/styles.css">
  </head>
  <body >
    <header>
      <p>This is the header.</p>
    </header>
    <main ></main>
    <footer>
      <p>This is the footer.</p>
    </footer>
  </body>
</html>
`;

describe('layout', () => {
  it('renders the layout correctly with default parameters', () => {
    expect(layout({})).toEqual(defaultLayout);
  });

  it('renders content correctly', () => {
    document.documentElement.innerHTML = layout({
      content: '<h1>Test h1</h1>',
    });

    const main = document.querySelector('main');

    expect(main?.innerHTML).toEqual('<h1>Test h1</h1>');
  });

  it('renders a custom title correctly', () => {
    document.documentElement.innerHTML = layout({
      pageTitle: 'Test Title',
    });

    const title = document.querySelector('title');

    expect(title?.innerHTML).toEqual('Test Title | Project Starter');
  });

  it('renders a custom description correctly', () => {
    document.documentElement.innerHTML = layout({
      description: 'Test description',
    });

    const description = document.querySelector('meta[name="description"]');

    expect(description?.getAttribute('content')).toEqual('Test description');
  });

  it('renders a custom header correctly', () => {
    document.documentElement.innerHTML = layout({
      header: '<header><p>Test header</p></header>',
    });

    const header = document.querySelector('header');

    expect(header?.innerHTML).toEqual('<p>Test header</p>');
  });

  it('renders a custom footer correctly', () => {
    document.documentElement.innerHTML = layout({
      footer: '<footer><p>Test footer</p></footer>',
    });

    const footer = document.querySelector('footer');

    expect(footer?.innerHTML).toEqual('<p>Test footer</p>');
  });

  it('renders the title with a custom suffix correctly', () => {
    document.documentElement.innerHTML = layout({
      titleSuffix: ' | Test Suffix',
    });

    const title = document.querySelector('title');

    expect(title?.innerHTML).toEqual('Project Starter | Test Suffix');
  });

  it('renders a custom lang attribute correctly', () => {
    const renderedHtml = layout({
      lang: 'fr',
    });

    expect(renderedHtml).toContain('<html lang="fr" >');
  });

  it('renders custom html attributes correctly', () => {
    const renderedHtml = layout({
      htmlAttributes: 'class="no-js"',
    });

    expect(renderedHtml).toContain('<html lang="en" class="no-js">');
  });

  it('renders custom body attributes correctly', () => {
    document.documentElement.innerHTML = layout({
      bodyAttributes: 'class="cmp-body"',
    });

    const body = document.querySelector('body');

    expect(body?.classList).toContain('cmp-body');
  });

  it('renders custom main attributes correctly', () => {
    document.documentElement.innerHTML = layout({
      mainAttributes: 'class="cmp-main"',
    });

    const main = document.querySelector('main');

    expect(main?.classList).toContain('cmp-main');
  });
});

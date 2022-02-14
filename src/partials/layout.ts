const defaultHeader = `<header>
      <p>This is the header.</p>
    </header>`;

const defaultFooter = `<footer>
      <p>This is the footer.</p>
    </footer>`;

const layout = ({
  content = '',
  pageTitle = 'Express Starter',
  description = 'This is the page description.',
  header = defaultHeader,
  footer = defaultFooter,
  titleSuffix = ' | Express Starter',
  lang = 'en',
  htmlAttributes = '',
  bodyAttributes = '',
  mainAttributes = '',
}) => `
<!doctype html>

<html lang="${lang}" ${htmlAttributes}>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${pageTitle}${titleSuffix}</title>
    <meta name="description" content="${description}">

    <link rel="stylesheet" href="/public/styles.css">
  </head>
  <body ${bodyAttributes}>
    ${header}
    <main ${mainAttributes}>${content}</main>
    ${footer}
  </body>
</html>
`;

export default layout;

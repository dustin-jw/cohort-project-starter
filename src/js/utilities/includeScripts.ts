interface ScriptDefinition {
  src: string;
  type?: 'module' | 'nomodule';
  asyncDefer?: 'async' | 'defer';
}

export const moduleType = (type?: 'module' | 'nomodule'): string => {
  let result = '';

  if (type === 'module') {
    result = ' type="module"';
  } else if (type === 'nomodule') {
    result = ' nomodule';
  }

  return result;
};

export const nonBlockingType = (asyncDefer?: 'async' | 'defer'): string => {
  let result = '';

  if (asyncDefer === 'async') {
    result = ' async';
  } else if (asyncDefer === 'defer') {
    result = ' defer';
  }

  return result;
};

const includeScripts = (scripts: Array<ScriptDefinition>): string => (
  scripts.map((script: ScriptDefinition): string => (
    `<script src="${script.src}"${moduleType(script.type)}${nonBlockingType(script.asyncDefer)}></script>`
  )).join('')
);

export default includeScripts;

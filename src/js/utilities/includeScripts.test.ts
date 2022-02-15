import includeScripts, { moduleType, nonBlockingType } from './includeScripts';

describe('includeScripts', () => {
  describe('moduleType', () => {
    it('returns type="module" for module types', () => {
      expect(moduleType('module')).toEqual(' type="module"');
    });

    it('returns nomodule for nomodule types', () => {
      expect(moduleType('nomodule')).toEqual(' nomodule');
    });

    it('returns an empty string for non-specified types', () => {
      expect(moduleType()).toEqual('');
    });
  });

  describe('nonBlockingType', () => {
    it('returns async for async scripts', () => {
      expect(nonBlockingType('async')).toEqual(' async');
    });

    it('returns defer for defer scripts', () => {
      expect(nonBlockingType('defer')).toEqual(' defer');
    });

    it('returns an empty string for non-specified scripts', () => {
      expect(nonBlockingType()).toEqual('');
    });
  });

  describe('includeScripts', () => {
    it('returns a script tag with a src attribute', () => {
      expect(includeScripts([{ src: '/public/home.js' }])).toEqual('<script src="/public/home.js"></script>');
    });

    it('handles the module/nomodule pattern', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          type: 'module',
        },
        {
          src: '/public/home.legacy.js',
          type: 'nomodule',
        },
      ])).toEqual('<script src="/public/home.js" type="module"></script><script src="/public/home.legacy.js" nomodule></script>');
    });

    it('handles async scripts', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          asyncDefer: 'async',
        },
      ])).toEqual('<script src="/public/home.js" async></script>');
    });

    it('handles defer scripts', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          asyncDefer: 'defer',
        },
      ])).toEqual('<script src="/public/home.js" defer></script>');
    });

    it('can do it all at once', () => {
      expect(includeScripts([
        {
          src: '/public/home.js',
          type: 'module',
          asyncDefer: 'async',
        },
        {
          src: '/public/home.legacy.js',
          type: 'nomodule',
          asyncDefer: 'async',
        },
      ])).toEqual('<script src="/public/home.js" type="module" async></script><script src="/public/home.legacy.js" nomodule async></script>');
    });
  });
});

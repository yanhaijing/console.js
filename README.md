# [console.js](https://github.com/yanhaijing/console.js) [![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base) [![npm](https://img.shields.io/badge/npm-0.3.0-orange.svg)](https://www.npmjs.com/package/console_js) [![Build Status](https://travis-ci.org/yanhaijing/console.js.svg?branch=master)](https://travis-ci.org/yanhaijing/console.js) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/console.js/blob/master/LICENSE)

console.js is a small javascript library, fix console is undefined, like html5shim and reset.css.

In ie6 ie7,console is undefined. In ie8 ie9, first open the developer tools before, console is undefined.

## Guides
Download and install through the npm

```bash
$ npm install --save console_js
```

If you are use webpack

```js
import { polyfill } from 'console_js';

polyfill(); // polyfill console undefined
```

If you are use requirejs

```js
requirejs(['node_modules/console_js/dist/index.aio.js'], function (console_js) {
    var polyfill = console_js.polyfill;

    polyfill(); // polyfill console undefined
})
```

If you are use browser

```html
<script src="node_modules/console_js/dist/index.aio.js"></script>

<script>
    var polyfill = console_js.polyfill;
    
    polyfill(); // polyfill console undefined
</script>
```

## Document
[API](https://github.com/yanhaijing/console.js/blob/master/doc/api.md)

## Principle & Blog
[use console.js](http://yanhaijing.com/js/2014/11/03/use-console.js/)

## Contribution
The first run requires installation of dependencies

```bash
$ npm install
```

Build code

```bash
$ npm run build
```

Run unit test, the browser environment requires manual test, in `test/browser`

```bash
$ npm test
```

Update package.json version，update README.md version，update CHANGELOG.md，then release

```bash
$ npm run release
```

Push to npm

```bash
$ npm publish
```

You may need to modify it as follows：

- README.md
- package.json
- config/rollup.js
- test/browser/index.html

## CHANGELOG
[CHANGELOG.md](https://github.com/yanhaijing/console.js/blob/master/CHANGELOG.md)

## TODO
[TODO.md](https://github.com/yanhaijing/console.js/blob/master/TODO.md)

## Who use

## Refrence
- [MSDN](http://msdn.microsoft.com/en-us/library/ie/gg589530.aspx)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [Firebug](http://getfirebug.com/wiki/index.php/Console_API)

## Related projects
- [browser-shim](https://github.com/ishmaelthedestroyer/browser-shim)
- [console-shim(liamnewmarch)](https://github.com/liamnewmarch/console-shim)
- [console-shim(kayahr)](https://github.com/kayahr/console-shim)
- [console-polyfill](https://github.com/paulmillr/console-polyfill)
- [consolex.js](https://github.com/deadlyicon/consolex.js/blob/master/src/consolex.js)

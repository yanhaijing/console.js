# Document

A small javascript library, fix console is undefined.

In ie6 ie7, console is undefined. In ie8 ie9, first open the developer tools before, console is undefined.

**note:** compiled code is dependent on ES5 environment, so it is need to include [es5-shim](http://github.com/es-shims/es5-shim/) for ie6-8, and you can view [demo/demo-global.html](../demo/demo-global.html)

## polyfill
Fix ie6-9 console.xxx is error

```js
console.log('xxx'); // Uncaught TypeError: Cannot read property 'log' of null

polyfill(); // fix

console.log('xxx'); // ok
```

Support fix api list:

- assert
- clear
- count
- debug
- dir
- dirxml
- exception
- error
- group
- groupCollapsed
- groupEnd
- info
- log
- profile
- profileEnd
- table
- time
- timeEnd
- timeStamp
- trace
- warn

The principle is overwrite console.xxx and add try catch, like below

```js
console.log = function(...args) {
    try {
        console.log(...args);
    } catch (e) {}
};
```

## safeExec


## log
Like console.log, but is safe on ie6-9, is useful for library developers

The param is same with console.log

```js
log('xxxx'); use log replace console.log
```

## info
Like console.info, same as above

## warn
Like console.warn, same as above

## error
Like console.error, same as above

# Document

A small javascript library, fix console is undefined.

In ie6 ie7, console is undefined. In ie8 ie9, first open the developer tools before, console is undefined.

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

## safeExec
safe exec console.xxx on ie 6-9, `log` `info` internal use of safeExec

```
safeExec('log', xxx); // console[log](xxx)
safeExec('assert', xxx); // console[assert](xxx)
```

## log1
only support one param, The difference between log and log1, log1 can remove by uglyjs, log can't remove by uglyjs

log internal implementation

```js
function log(...args) {
    try {
        // can't remove by uglyjs
        return apply.call(console[cmd], console, args);
    } catch (e) {}
}
```

log1 internal implementation

```js
function log1(msg) {
    try {
        // can remove by uglyjs
        return console.log('log:', msg);
    } catch(e) {}
}
```

demo

```js
log1('xxxxx');
```

## warn1
only support one param, like log1

## error1
only support one param, like log1

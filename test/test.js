var expect = require('expect.js');

var polyfill = require('../dist/index.js').polyfill;
var safeExec = require('../dist/index.js').safeExec;
var log = require('../dist/index.js').log;
var info = require('../dist/index.js').info;
var warn = require('../dist/index.js').warn;
var error = require('../dist/index.js').error;
var log1 = require('../dist/index.js').log1;
var warn1 = require('../dist/index.js').warn1;
var error1 = require('../dist/index.js').error1;

describe('单元测试', function() {
    this.timeout(1000);

    describe('function', function() {
        it('safeExec', function() {
            safeExec('log', 'safeExec log', 111, 222);
            safeExec('warn', 'safeExec warn', 111, 222);
        });

        it('other', function() {
            log('log', 111, 222);
            info('info', 111, 222);
            warn('warn', 111, 222);
            error('error', 111, 222);
        });

        it('log1', function() {
            log1(11111111111);
            warn1(333333333333);
            error1(444444444444);
        });
    });

    describe('polyfill', function() {
        it('polyfill', function() {
            polyfill();

            console.log('console.log', 111, 222);
            console.info('console.info', 111, 222);
            console.warn('console.warn', 111, 222);
            console.error('console.error', 111, 222);
        });
    });
});

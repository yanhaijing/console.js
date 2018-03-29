// rollup.config.js

var babel = require("rollup-plugin-babel");
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var common = require('./rollup.js');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: common.name,
        // 如果不同时使用 export 与 export default 可打开legacy
        legacy: true,
        banner: common.banner,
    },
    plugins: [
        nodeResolve({
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};

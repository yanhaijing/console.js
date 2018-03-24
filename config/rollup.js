var pkg = require('../package.json');

// 兼容 console.js 和 @yanhaijing/console.js 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * console.js ${version} (https://github.com/yanhaijing/console.js)
 * API https://github.com/yanhaijing/console.js/blob/master/doc/api.md
 * Copyright 2013-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/console.js/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;

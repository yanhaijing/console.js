const apply = Function.prototype.apply;

export function polyfill() {
    const g = typeof window !== 'undefined' ? window : {};

    const _console = g.console || {};
    const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'exception', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    
    const console = {};

    for (let i = 0; i < methods.length; i++) {
        const key = methods[i];
        console[key] = function() {
            if (typeof _console[key] === 'undefined') {
                return;
            }
            // 添加容错处理
            try {
                return apply.call(_console[key], _console, arguments);
            } catch (e) {}
        };
    }

    g.console = console;
}

export function safeExec(cmd, ...args) {
    try {
        return apply.call(console[cmd], console, args);
    } catch (e) {}
}
export function log(...args) {
    return safeExec('log', ...args);
}

export function info(...args) {
    return safeExec('info', ...args);
}

export function warn(...args) {
    return safeExec('warn', ...args);
}

export function error(...args) {
    return safeExec('error', ...args);
}

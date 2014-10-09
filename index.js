/* global require, module */
var injector = require('connect-injector');

module.exports = function (options) {
    options = options || {};
    options.host = options.host || '127.0.0.1';
    options.port = options.port || '8080';
    options.id = options.id || 'anonymous';

    return injector(function (req, res) {
        return (res.getHeader('content-type') || []).indexOf('text/html') > -1;
    }, function (content, req, res, callback) {
        var scriptSrc = 'http://' + options.host + ':' + options.port + '/target/target-script-min.js#' + options.id;

        content = content.toString().replace('</head>', '<script src="' + scriptSrc + '"></script></head>');

        callback(null, content);
    });
};

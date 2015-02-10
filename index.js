/* global require, module */
var injector = require('connect-injector');

module.exports = function (options) {
    options = options || {};
    options.host = options.host || '127.0.0.1';
    options.port = options.port || '8080';
    options.id = options.id || 'anonymous';

    return injector(function (req, res) {
        return (res.getHeader('content-type') || '').indexOf('text/html') > -1;
    }, function (content, req, res, callback) {
        var snippet = "<script>(function () {" +
            "if (document.getElementById('weinre-script')) { return false; }" +
            "var w = document.createElement('script'); " +
            "w.id = 'weinre-script';" +
            "w.type = 'text/javascript'; w.async = true; " +
            "w.src = '//" + options.host + ":" + options.port + "/target/target-script-min.js#" + options.id + "';" +
            "var s = document.getElementsByTagName('script')[0];" +
            "s.parentNode.insertBefore(w, s); " +
            "}());</script>";

        content = content.toString().replace('</body>', snippet + "</body>");

        callback(null, content);
    });
};

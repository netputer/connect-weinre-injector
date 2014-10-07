# connect-weinre-injector

A connect middleware to inject weinre script into any page.

## Getting Started

Install the module with: `npm install connect-injector --save-dev`

## Grunt Example

For use as middleware in grunt simply add the following to the top of your array of middleware.

```js
grunt.initConfig({
  connect: {
    options: {
      hostname: '127.0.0.1',
      port: 9999,
      middleware: function (connect) {
        return [
          require('connect-weinre-injector')({
            host: '127.0.0.1',
            port: '8080',
            id: 'anonymous'
          }),
          mountFolder(connect, '.tmp'),
          mountFolder(connect, 'app'),
        ];
      },
    },
  },
});
```

hyper.io-handlebars
==========================

EJS Template Middleware for Hyper.io

## NPM
```sh
$ npm install hyper.io-ejs
```

## Use
```javascript
var hyper = require('hyper.io');
var ejs   = require('hyper.io-ejs');

// add EJS, this is optional,
// hyper.io will auto try to require the 'ejs'
// if it's not included in the middleware already
hyper().use(ejs);

// load config and routes
hyper().start({
    routes: [
        {
            view: "/hello",
            template: "hello <%= hello %> - <%= ts %>",
            method: {
                get: function world($done)
                {
                    $done( {
                        hello: "world",
                        ts: new Date()
                    } );
                }
            }
        }
    ]
});

```
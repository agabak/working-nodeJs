(function () {
    'use strict';
    var express = require('express'),
         app = express(),
         port = 5000;
    app.use(express.static('public'));
    app.use(express.static('src/views'));
    app.get('/', function (req, res) {
        res.send('Hello there');
    });
    app.get('/books', function (req, res) {
        res.send('I  have books  here');
    });
    app.listen(port, function (err) {
        console.log('runnung on port ' + port);
    });
})();
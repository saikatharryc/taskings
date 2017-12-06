var express = require('express');
var logger = require('morgan');
const cors = require("cors");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('./config/mongoose');

var app = express();
require('./server/models/index');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
var routes = require('./server/routes/index');
routes.includeRoutes(app);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    // render the error page
    res.status(err.status || err.errorCode || 500);
    // res.render('error');
    res.json({ message: err.message || "Unknown Error Occured", err: err.err });
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
var createError = require('http-errors');
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//for userRouter.js
var usersRouter = require("./routes/userRouter");

//for rfidCheckInRouter.js
var rfidCheckInRouter = require("./routes/rfidCheckInRouter");

//for rfidCheckoutRouter.js
var checkoutRouter = require("./routes/rfidCheckOutRouter");

//for simpleController.js
var simpleRouter = require('./routes/simpleRouter');

//for validationController.js
var validationRouter = require('./routes/validationRouter');

//for taskController.js
var taskRouter = require('./routes/taskRouter');

//for authController.js
var authRouter = require('./routes/authRouter');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use("/user",usersRouter);

app.use("/rfid", rfidCheckInRouter );

app.use("/checkout", checkoutRouter);

app.use('/simple', simpleRouter);

app.use('/validation',validationRouter);

app.use('/task', taskRouter);

app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

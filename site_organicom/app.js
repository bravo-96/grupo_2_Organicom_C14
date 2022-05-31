const createError = require('http-errors');
const express = require('express');
const path = require('path');


/* hacer npm i method-override - alex */
const methodOverride = require("method-override");
const multer = require ("multer")

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

//--------------------Parte puesta por alex------------Si hay errores, mirar en el router---------

const adminProductsRouter = require("./routes/adminProducts");

//--------------------Cambiar nombres si se hace mas comodo---------------------------------------

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* agrege el app.use -alex*/
app.use(methodOverride("_method"))
/* agrege el app.use -alex*/

// Capeta public
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use("/adminProducts", adminProductsRouter);

/*
app.get('/', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
);
app.get('/detalleProducto', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'views', 'detalleProducto.html'))
);
app.get('/carrito', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'views', 'carrito.html'))
);
app.get('/login', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'views', 'login.html'))
);
app.get('/register', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'views', 'register.html'))
);
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;

//Dependencias... son un muchas xdddd
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const frutaRouter = require('./routes/fruta');
const verduraRouter = require('./routes/verdura');
const server = express();
// Connección a MongoDB
//mongodb+srv://OniichanUwU:Nniu8eqzU77rnWey@sistema-web.a0y5q.mongodb.net/Sistema-web?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://OniichanUwU:Nniu8eqzU77rnWey@sistema-web.a0y5q.mongodb.net/Sistema-web?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if(err)
    console.error(err)
  else
    console.log("Conectado a  MongoDB")
})
//Confiruración de los routers
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use('/', indexRouter);
server.use('/user', userRouter);
server.use("fruta/api", frutaRouter);
server.use("verdura/api", verduraRouter);
//Caso de error 404
server.use(function(req, res, next) {
  next(createError(404));
});
//Cabecera de errores
server.use(function(err, req, res, next) {
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
//Página de errores xd
res.status(err.status || 500);
res.render('error');
});
//Exporta el router express
module.exports = server;

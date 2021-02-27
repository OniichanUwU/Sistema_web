//Dependencias
var server = require('../server');
var debug = require('debug')('sistema_web:server');
var http = require('http');
//Puerto 3000
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
//Prepara las interfaces del servidor
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//Castea el puerto
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
//Caso de error
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
//Mensajes de error
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' Acceso no permitido');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' Error inesperado');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
//Levanta el servidor
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

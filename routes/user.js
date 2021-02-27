//Mas Dependencias xd
var express = require('express');
var router = express.Router();
//Configuracion Router
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/perros', function(req, res, next) {
  var perros =[{nombre: 'Mateo', edad: 5}, {nombre: 'Pepe', edad: 3}, {nombre: 'Danta', edad: 2}];
    res.json(perros);
  
});

module.exports = router;
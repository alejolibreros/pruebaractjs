let express = require('express');
let router = express.Router();
  
// Modelo adoptante
var adoptanteSchema = require("../models/Adoptante");

// Crear Adoptante
router.route("/crear-adoptante").post((req, res, next) => {
  adoptanteSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Leer adoptante
router.route("/ver-adoptante").get((req, res, next) => {
  adoptanteSchema.find(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
  
// Student Model
var adoptanteSchema = require("../models/Adoptante");

// Crear Mascota
router.route("/lista_crear").post((req, res, next) => {
  adoptanteSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;
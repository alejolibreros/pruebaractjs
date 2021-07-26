let express = require('express');
let router = express.Router();
  
// Adoptante Model
var adoptanteSchema = require("../models/Adoptante");

// Crear Adoptante
router.route("/crear-adoptante").post((req, res, next) => {
  adoptanteSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
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


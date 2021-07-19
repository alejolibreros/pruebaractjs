let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let mascotaSchema = require("../models/Mascota");

// CREAR Mascota
router.route("/crear-mascota").post((req, res, next) => {
  mascotaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Leer Mascotas
router.route("/ver-mascota").get((req, res) => {
  mascotaSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;

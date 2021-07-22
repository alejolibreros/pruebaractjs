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

// Obtener una sola mascota
router.route("/editar-mascota/:id").get((req, res) => {
  mascotaSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Mascota
router.route("/actualizar-mascota/:id").put((req, res, next) => {
  mascotaSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Mascota actualizada exitosamente !");
      }
    }
  );
});

module.exports = router;

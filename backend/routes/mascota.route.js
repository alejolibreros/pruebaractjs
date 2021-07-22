let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let mascotaSchema = require("../models/Mascota");

// Crear Mascota
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

// Leer Mascotas que no han sido adoptadas
router.route("/ver-mascota").get((req, res, next) => {
  mascotaSchema.find({ estado: "No Adoptado" }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener una sola Mascota
router.route("/editar-mascota/:id").get((req, res, next) => {
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

// Eliminar Mascota (Cambiar el estado)
router.route("/eliminar-mascota/:id").put((req, res, next) => {
  mascotaSchema.findByIdAndUpdate(
    req.params.id,
    {
      estado: "Adoptado",
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Estado de mascota actualizada exitosamente !");
      }
    }
  );
});

module.exports = router;

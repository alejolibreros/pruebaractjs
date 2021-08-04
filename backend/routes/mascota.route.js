let express = require("express"),
  router = express.Router();

// const upload = require("../libs/storage");
const {
  addMascota,
  getMascota,
  getOneMascota,
  updateMascota,
  deleteMascota,
} = require("../controllers/mascotaController");

// Obtener Mascotas que no han sido adoptadas
router.get("/ver-mascota", getMascota);
// Crear mascota
// router.post("/crear-mascota", upload.single("foto"), addMascota);
router.post("/crear-mascota", addMascota);
// Obenter una mascota en específico
router.get("/editar-mascota/:id", getOneMascota);
// Actualizar una mascota en específico
// router.put("/actualizar-mascota/:id", upload.single("foto"), updateMascota);
router.put("/actualizar-mascota/:id", updateMascota);
// Eliminar Mascota (Cambiar el estado)
router.put("/eliminar-mascota/:id", deleteMascota);

module.exports = router;

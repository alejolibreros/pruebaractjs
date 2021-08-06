const Mascota = require("../models/Mascota");
const cloudinary = require("cloudinary");
const { cloudinaryConfig } = require("../config");
// Configuración servidor de imágenes Cloudinary 
cloudinary.config({
  cloud_name: cloudinaryConfig.cloud_name,
  api_key: cloudinaryConfig.api_key,
  api_secret: cloudinaryConfig.api_secret,
});

const fs = require("fs-extra");

// Añadir una mascota
async function addMascota(req, res) {
  try {
    const { name, descripcion, sexo, tamanho, edad, estado } = req.body;
    // Sube la imagen al servidor de imágenes Cloudinary 
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const mascota = Mascota({
      name,
      descripcion,
      foto: result.url,
      sexo,
      tamanho,
      edad,
      estado,
    });

    const mascotaStored = await mascota.save();
    await fs.unlink(req.file.path); // Elimina la foto

    res.status(201).send({ mascotaStored });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

// Obtener el listado de todas las mascotas
async function getMascota(req, res) {
  res
    .status(200)
    .send(await Mascota.find({ estado: "No Adoptado" }).lean().exec());
}

// Obtener una mascota en específico
async function getOneMascota(req, res) {
  res.status(200).send(await Mascota.findById(req.params.id).lean().exec());
}

// Actualizar una mascota
async function updateMascota(req, res) {
  try {
    const { name, descripcion, sexo, tamanho, edad, estado } = req.body;

    //Busca la mascota
    const mascotaID = await Mascota.findOne({ _id: req.params.id });
    //Actualiza datos
    mascotaID.name = name;
    mascotaID.descripcion = descripcion;
    mascotaID.sexo = sexo;
    mascotaID.tamanho = tamanho;
    mascotaID.edad = edad;
    mascotaID.estado = estado;

    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      mascotaID.foto = result.url;

      await fs.unlink(req.file.path); // Elimina la foto

      res.status(200).send(await mascotaID.save());
    } else {
      res.status(200).send(await mascotaID.save());
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

// Eliminar Mascota (Cambiar el estado)
async function deleteMascota(req, res) {
  try {
    //Busco la mascota
    const mascotaID = await Mascota.findOne({ _id: req.params.id });
    //Actualizo su estado
    mascotaID.estado = "Adoptado";

    res.status(200).send(await mascotaID.save());
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

module.exports = {
  addMascota,
  getMascota,
  getOneMascota,
  updateMascota,
  deleteMascota,
};
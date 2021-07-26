const Mascota = require("../models/Mascota");

// Añadir una mascota
async function addMascota(req, res) {
  try {
    const { name, descripcion, sexo, tamanho, edad, estado } = req.body;

    const mascota = Mascota({
      name,
      descripcion,
      sexo,
      tamanho,
      edad,
      estado,
    });

    if (req.file) {
      const { filename } = req.file;
      mascota.setFotoUrl(filename);
    }

    const mascotaStored = await mascota.save();

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

    //Busco la mascota
    const mascotaID = await Mascota.findOne({ _id: req.params.id });
    //Actualizo sus datos
    mascotaID.name = name;
    mascotaID.descripcion = descripcion;
    mascotaID.sexo = sexo;
    mascotaID.tamanho = tamanho;
    mascotaID.edad = edad;
    mascotaID.estado = estado;

    if (req.file) {
      const { filename } = req.file;
      mascotaID.setFotoUrl(filename);
    }

    res.status(200).send(await mascotaID.save());
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

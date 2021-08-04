const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let mascotaSchema = new Schema(
  {
    name: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    foto: {
      type: String,
    },
    sexo: {
      type: String,
    },
    tamanho: {
      type: String,
    },
    edad: {
      type: Number,
    },
    estado: {
      type: String,
    },
  },
  {
    collection: "mascotas",
  }
);

module.exports = mongoose.model("Mascota", mascotaSchema);

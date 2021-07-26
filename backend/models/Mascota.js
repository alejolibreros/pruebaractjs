const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { appConfig } = require('../config')

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

mascotaSchema.methods.setFotoUrl = function setFotoUrl(filename){
  const { host, port } = appConfig
  this.foto = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model("Mascota", mascotaSchema);

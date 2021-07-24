const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    
let adoptanteSchema = new Schema(
  {
    name: {
      type: String,
    },
    telefono: {
      type: Number,
    },
    correo: {
      type: String,
    },
    mascota: {
      type: String,
    },
  },
  {
    collection: "adoptantes",
  }
);

module.exports = mongoose.model("Adoptantes", adoptanteSchema);
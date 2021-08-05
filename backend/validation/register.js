const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convertir los campos vacíos en una cadena vacía para poder utilizar las funciones del validador
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Comprobación del nombre
  if (Validator.isEmpty(data.name)) {
    errors.name = "Campo nombre es obligatorio";
  }
  // Verificación de correo electrónico
  if (Validator.isEmpty(data.email)) {
    errors.email = "Campo del correo electrónico es obligatorio";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Correo electrónico inválido";
  }
  // Verificación de contraseñas
  if (Validator.isEmpty(data.password)) {
    errors.password = "Campo contraseña es obligatorio";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Campo confirmar contraseña es obligatorio";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas deben coincidir";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

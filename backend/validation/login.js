const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convertir los campos vacíos en una cadena vacía para poder utilizar las funciones del validador
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //  Verificación de correo electrónico
  if (Validator.isEmpty(data.email)) {
    errors.email = "Campo del correo electrónico es obligatorio";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Correo electrónico inválido";
  }

  // Verificación de contraseñas
  if (Validator.isEmpty(data.password)) {
    errors.password = "Campo de la contraseña es obligatorio";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

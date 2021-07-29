const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Cargar validación de entrada
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Cargar modelo de Usuario
const User = require("../models/Users");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Validación de formularios
  const { errors, isValid } = validateRegisterInput(req.body);
  // Verificar validación
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "El correo electrónico ya existe" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Hash de contraseña antes de guardar en la base de datos
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Validación de formularios
  const { errors, isValid } = validateLoginInput(req.body);
  // Verificar validación
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Encontrar usuario por correo electrónico
  User.findOne({ email }).then((user) => {
    // Compruebe si el usuario existe
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Comprobar contraseña
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Usuario emparejado
        // Crear JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Token de firma
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 año en segundos
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Contraseña incorrecta" });
      }
    });
  });
});
module.exports = router;

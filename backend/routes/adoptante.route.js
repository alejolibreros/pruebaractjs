var express = require('express');
var router = express.Router();

// Adoptante  Model
let Adoptante = require("../models/Adoptante");



/*Get lista de datos*/
router.route('/lista_adoptantes').get(Adoptante.Adoptante_list = function(req, res, next){
    res.render(Adoptante.allAdop);
})

//Luego hacemos la creacion del adoptante
router.route('/lista_crear').post(Adoptante.adoptante_create_post = function(req, res, next){
    var adopta = new Adoptante(req.body.cedula, req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo);
    Adoptante.add(adopta);
    
    res.redirect('/lista_adoptante');
})

module.exports = router;
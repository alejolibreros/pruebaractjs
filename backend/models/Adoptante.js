var Adoptante = function(cedula, nombre, apellido, telefono, correo){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
}

Adoptante.prototype.toString = function(){
    return 'Nombre: ' + this.nombre + " | Apellido: " + this.apellido;
}

// Aqui va la informacion de los adoptantes para evitar hacer uso de base de datos 
Adoptante.allAdop = [];


var a = new Adoptante(1023456789,Juan, 'Hernandez', 3124778888, 'juanh@correo.co' );
var b = new Adoptante(12345678, David, 'blanca', 65487/744, 'davidb@correo.co' );

Adoptante.add(a);
Adoptante.add(b);

module.exports = Adoptante;
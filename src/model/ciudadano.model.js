class Ciudadano {
  constructor(
    dni,
    nombre1,
    nombre2,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    genero
  ) {
    this.dni = dni;
    this.nombre1 = nombre1;
    this.nombre2 = nombre2;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
  }
}

module.exports = Ciudadano;

const Ciudadano = require("../model/ciudadano.model");

const FEMENINO = "F";
const MASCULINO = "M";

const nombresHombre = ["Jose", "Luis", "Job", "Ricardo", "Antonio"];
const nombresMujer = ["Luisa", "Sofia", "Carol", "Geraldine", "Maria"];
const apellidos = ["Cordero", "Quispe", "Rodriguez", "Cuba", "Iglesias"];

class CiudadanosUtil {
  generarCiudadano(dni) {
    var ciudadano;
    const genero = this.generarNumeroAleatorioEntero(0, 1);

    if (genero) {
      ciudadano = new Ciudadano(
        dni,
        nombresHombre[
          this.generarNumeroAleatorioEntero(0, nombresHombre.length - 1)
        ],
        nombresHombre[
          this.generarNumeroAleatorioEntero(0, nombresHombre.length - 1)
        ],
        apellidos[this.generarNumeroAleatorioEntero(0, apellidos.length - 1)],
        apellidos[this.generarNumeroAleatorioEntero(0, apellidos.length - 1)],
        this.generarFechaNacimientoAleatorio(),
        MASCULINO
      );
    } else {
      ciudadano = new Ciudadano(
        dni,
        nombresMujer[
          this.generarNumeroAleatorioEntero(0, nombresHombre.length - 1)
        ],
        nombresMujer[
          this.generarNumeroAleatorioEntero(0, nombresHombre.length - 1)
        ],
        apellidos[this.generarNumeroAleatorioEntero(0, apellidos.length - 1)],
        apellidos[this.generarNumeroAleatorioEntero(0, apellidos.length - 1)],
        this.generarFechaNacimientoAleatorio(),
        FEMENINO
      );
    }

    return ciudadano;
  }

  generarNumeroAleatorioEntero(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  generarFechaNacimientoAleatorio() {
    return new Date(
      this.generarNumeroAleatorioEntero(
        new Date(1900, 0, 1).getTime(),
        new Date()
      )
    );
  }
}

module.exports = new CiudadanosUtil();

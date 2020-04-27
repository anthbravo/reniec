const ciudadanoUtil = require("../util/ciudadanos.util");

const DNI_INVALIDO = "12345678";

class CiudadanosService {
  buscarCiudadano(dni) {
    if (dni == DNI_INVALIDO || !/^([0-9]{8})$/.test(dni)) {
      return null;
    }

    return ciudadanoUtil.generarCiudadano(dni);
  }
}

module.exports = new CiudadanosService();

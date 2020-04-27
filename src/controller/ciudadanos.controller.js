const express = require("express");

const ciudadanosService = require("../service/ciudadanos.service");

class CiudadanosController {
  start(app) {
    const router = express.Router();

    app.use("/ciudadanos", router);

    router.get("/:dni", async (req, res, next) => {
      const dni = req.params.dni;
      const ciudadano = ciudadanosService.buscarCiudadano(dni);

      if (ciudadano == null) {
        res.status(204);
        res.json();
      } else {
        res.status(200);
        res.json(ciudadano);
      }
    });
  }
}

module.exports = new CiudadanosController();

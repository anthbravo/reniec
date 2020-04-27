const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const ciudadanosController = require("./controller/ciudadanos.controller");

app.use(cors());

app.get("/", (req, res) => {
  let informacionUsuario = req.header("user-agent");
  res.send(`Tu información: ${informacionUsuario}`);
});

ciudadanosController.start(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Escuchando desde puerto ${port}`);
});

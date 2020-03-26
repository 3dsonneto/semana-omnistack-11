const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Edson Neto"
  });

});//criando minha primeira rota, a rota raiz

app.listen(3333);
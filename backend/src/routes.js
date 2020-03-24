const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    "aluno": "Daniel Mello",
    "idade": 30
  })
});

module.exports = routes;
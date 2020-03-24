const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const routes = express.Router();

routes.get("/ongs", async (req, res) => {
  const ongs = await connection("ongs").select("*");

  return res.json(ongs)
});

routes.post("/ongs", async (req, res) => {
  
});

module.exports = routes;
const connection = require("../database/connection");
//1.3.11
module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf} = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({ 
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    
    return res.json({ id });
  }
};
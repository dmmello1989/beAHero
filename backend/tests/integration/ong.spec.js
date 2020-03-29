const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it("Should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      // PARA TESTAR ROTAS QUE UTILIZEM O HEADERS E AUTHORIZATION, USAR O CODIGO ABAIXO
      //.set("Authorization", "87639b64")
      // fazer testes para outras rotas
      // 5325
      .send({
        name: "APAE",
        email: "contato@gmail.com",
        whatsapp: "48999379233",
        city: "Rio do Sul",
        uf: "SC"
      });

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toHaveLength(8);
  })
})